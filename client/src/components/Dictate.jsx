import { useEffect, useState, useRef, useContext } from "react"
import axios from "axios"
import 'regenerator-runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Nav from "./Navbar";
import { Textarea ,Button,Input, toggle} from "@nextui-org/react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {Toaster,toast} from 'sonner'

const Dictaphone = () => {
  const[toogle,settoogle] = useState(true)
const[text,settext] = useState('')
  const[summary,setsummary] = useState('')
  const[name,setname] = useState('')
  const inputHandler = (event) => {
    setname(event.target.value);
    console.log(event.target.value);
  };
  const handletextchange = (e) => {
    settext(e.target.value)
  }
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
 useEffect(()=>{
  settext(transcript)
 },[transcript])

//  useEffect(()=>{
//   setTimeout(()=>{
//     settoogle(false)
//   },4000)
// },[])

  return (
    <div className=" h-screen">
      <Nav/>
      <p className="text-xl mx-9">
        Microphone: {listening ? <span className="text-green-500 font-bold">ON</span> : <span className="text-red-600 font-extrabold">OFF</span>}
      </p>
    <div className="grid lg:grid-cols-2 gap-4 ">
      {/* grid 1 */}
    <div>
      <div className=" ml-20">
      <Input type="text" label="Name" className=" w-52 py-5" placeholder="Enter Patient name" onChange={inputHandler} /> 
    </div>
    <Textarea
    className=" max-w-lg ml-20"
            variant="faded"
            minRows="10"
            placeholder="Edit text area which will transcribe from recorded audio and you can edit it..."
            value={text}
            onChange={handletextchange}
          ></Textarea>
          <div className=" flex justify-center space-x-5 mt-6">
          <Button color="success" onClick={()=>SpeechRecognition.startListening({ continuous: true },{ language: 'en-IN'})}>Start</Button>
          <Button color="danger" onClick={SpeechRecognition.stopListening}>Stop</Button>
    {/* <Button color="primary" isLoading>Genrating</Button> */}
          <Button
      onClick={()=>{
        axios.post('http://localhost:3000/generate',{chat: text})
        .then(response=>{
          console.log(response.data)
          setsummary(response.data)
        })
      }}
      >Proceed</Button>
      </div>
    </div>
    {/* grid 2 */}
    <div>
          <h2 className=" text-2xl font-bold mb-2 text-center">Patient Report</h2>
          {/* <Textarea
            className="w-full p-2  border-gray-300 rounded mb-4"
            rows="50"
            placeholder="Plain text patient report fetched from database will be displayed here"
            value={summary}
          ></Textarea> */}
          <SimpleMDE value={summary} className=" mx-8"/>
          <Toaster/>
          <Button  color="primary" variant="shadow" className=" mt-14" onClick={async()=>{
      await axios.post('http://localhost:3000/text',{name,transcript : summary})
      .then(res =>
        toast.success(`Medical Report of ${name} \n Saved Succesfully`)
      )
    }}>Save</Button>
        </div>

    </div>
  </div>
  );
};
export default Dictaphone;