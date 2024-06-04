import { useEffect, useState, useRef } from "react"
import axios from "axios"
import 'regenerator-runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button, TextArea } from "@radix-ui/themes";
import Fetchdetails from "./Fetchdetails";
import JoditEditor from 'jodit-react';

const Dictaphone = () => {
  const editor = useRef(null)
  const[text,setText] = useState('');
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
      <nav className=" border-b">
        <h1 className=" text-lg font-medium">SRI JAYADEVA INSTITUTE OF CARDIOVASCULAR SCIENCES </h1>
      </nav>

    <p className=" text-xl mx-9">Microphone: {listening ? <h1 className=" text-green-500 font-bold">ON</h1> : <h1 className=" text-red-600 font-extrabold">OFF</h1>}</p>
    <div className="grid grid-cols-2 gap-4 mx-10">
    <div className=" space-x-3">
    <Button onClick={()=>SpeechRecognition.startListening({ continuous: true },{ language: 'en-IN'})}>Start</Button>
    {/* <bu onClick={SpeechRecognition.stopListening}>Stop</bu> */}
    <Button onClick={SpeechRecognition.stopListening}>stop</Button>
    <Button onClick={resetTranscript}>Reset</Button>
    <Button onClick={async()=>{
      setText(transcript)
      await axios.post('http://localhost:3000/text',{transcript})
    }}>Save to database</Button>
    </div>
    <div>
    {/* <JoditEditor
			ref={editor}
			value={transcript}
			tabIndex={1} // tabIndex of textarea
			
		/> */}
    <div>{transcript}</div>
    <p>This is stored: {text}</p>
    </div>
    </div>
  </div>
  );
};
export default Dictaphone;