import { useEffect, useState, useRef, useContext } from "react"
import axios from "axios"
import 'regenerator-runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Nav from "./Navbar";
import { Textarea ,Button,Input, toggle} from "@nextui-org/react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {Toaster,toast} from 'sonner'
import { FaMicrophone } from "react-icons/fa6";
import { IoIosMicOff } from "react-icons/io";
import { MdStart } from "react-icons/md";

const Dictaphone = () => {
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
    <div>
      <Nav/>
      {/* <p className="text-xl mx-9">
        Microphone: {listening ? <span className="text-green-500 font-bold">ON</span> : <span className="text-red-600 font-extrabold">OFF</span>}
      </p> */}
    <div className="grid lg:grid-cols-2 gap-4 mt-5">
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
          {listening ? <span className="text-green-500 font-bold text-xl font-sans">ON</span> : <span className="text-red-600 font-extrabold text-xl">OFF</span>}
          <Button isIconOnly color="success" onClick={()=>SpeechRecognition.startListening({ continuous: true },{ language: 'en-IN'})}><FaMicrophone size={20}/></Button>
          <Button isIconOnly color="danger" onClick={SpeechRecognition.stopListening}><IoIosMicOff size={20}/></Button>
    {/* <Button color="primary" isLoading>Genrating</Button> */}
          <Button
      onClick={()=>{
        axios.post('http://localhost:3000/generate',{chat: text})
        .then(response=>{
          console.log(response.data)
          setsummary(response.data)
        })
      }}
      >Summarise<MdStart size={20}/></Button>
      </div>
    </div>
    {/* grid 2 */}
    <div>
          <h2 className=" text-2xl font-bold mb-2 ml-10">Patient Report</h2>
          <Toaster/>
          <Button  color="primary" variant="shadow" className="ml-10 mb-4" onClick={async()=>{
      await axios.post('http://localhost:3000/text',{name,transcript : summary})
      .then(res =>
        toast.success(`Medical Report of ${name} \n Saved Succesfully`)
      )
    }}>Save</Button>
          <SimpleMDE value={summary} className=" mx-8"/>
        </div>

    </div>
  </div>
  );
};
export default Dictaphone;