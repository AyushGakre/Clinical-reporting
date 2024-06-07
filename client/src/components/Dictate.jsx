import { useEffect, useState, useRef } from "react"
import axios from "axios"
import 'regenerator-runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Nav from "./Navbar";
import { Textarea ,Button} from "@nextui-org/react";


const Dictaphone = () => {
  const[text,setText] = useState('');
  const[summary,setsummary] = useState([])
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
 

  return (
    <div>
      <Nav/>
      <p className="text-xl mx-9">
        Microphone: {listening ? <span className="text-green-500 font-bold">ON</span> : <span className="text-red-600 font-extrabold">OFF</span>}
      </p>
    <div className="grid grid-cols-2 gap-4 mt-6 mx-10">
    <div className="p-4 bg-white shadow-md">
    <h2 className="text-lg font-bold mb-2">Patient Name: John Doe</h2>
      <div className="flex justify-between mb-4">
    <Button color="success" onClick={()=>SpeechRecognition.startListening({ continuous: true },{ language: 'en-IN'})}>Start</Button>
    <Button color="danger" onClick={SpeechRecognition.stopListening}>Stop</Button>
    <Button  color="primary" variant="shadow" onClick={resetTranscript}>Reset</Button>
    </div>
    <Textarea
            className="w-full p-2 border border-gray-300 rounded mb-4"
            rows="10"
            placeholder="Edit text area which will transcribe from recorded audio and you can edit it"
            value={transcript || text}
          ></Textarea>
    
          <Button
      onClick={()=>{
        axios.post('http://localhost:3000/generate',{chat: transcript})
        .then(response=>{
          console.log(response.data)
          setsummary(response.data)
        })
      }}
      >genAi</Button>
    </div>
    {/* <div>
      <Button
      onClick={()=>{
        axios.post('http://localhost:3000/generate',{chat: transcript})
        .then(response=>{
          console.log(response.data)
          setsummary(response.data)
        })
      }}
      >genAi</Button>
      <pre >{summary}</pre>
    </div> */}
    <div className="p-4 bg-white shadow-md">
          <h2 className="text-lg font-bold mb-2">Patient Report</h2>
          <Textarea
            className="w-full p-2 border border-gray-300 rounded mb-4"
            rows="15"
            placeholder="Plain text patient report fetched from database will be displayed here"
            value={summary}
            readOnly
          ></Textarea>
          <Button  color="primary" variant="shadow" onClick={async()=>{
      await axios.post('http://localhost:3000/text',{transcript : summary})
    }}>Save</Button>
        </div>
    </div>
  </div>
  );
};
export default Dictaphone;