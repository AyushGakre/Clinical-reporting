import { useEffect, useState, useRef } from "react"
import axios from "axios"
import 'regenerator-runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Nav from "./Navbar";
import { Textarea ,Button} from "@nextui-org/react";


const Dictaphone = () => {
  // const[text,setText] = useState('');
  const[summary,setsummary] = useState([])
  const text = `my name is ayush`
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
    <p className=" text-xl mx-9">Microphone: {listening ? <p className=" text-green-500 font-bold">ON</p> : <p className=" text-red-600 font-extrabold">OFF</p>}</p>
    <div className="grid grid-cols-2 gap-4 mx-10">
    <div className="">
      <div className="flex justify-center gap-4">
        <div>
    <Button color="success" onClick={()=>SpeechRecognition.startListening({ continuous: true },{ language: 'en-IN'})}>Start</Button>
    </div>
    <div>
    <Button color="danger" onClick={SpeechRecognition.stopListening}>Stop</Button>
    </div>
    <div>
    <Button  color="primary" variant="shadow" onClick={resetTranscript}>Reset</Button>
    </div>
    <div>
    <Button  color="primary" variant="shadow" onClick={async()=>{
      await axios.post('http://localhost:3000/text',{transcript})
    }}>Save</Button>
    </div>
    </div>
    <Textarea className=" max-w-md mt-5 ml-28" placeholder="speech to text" label="Transcript"  value={transcript} ></Textarea>
    </div>
    <div>
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
    </div>
    </div>
  </div>
  );
};
export default Dictaphone;