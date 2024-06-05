import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card, CardHeader, CardBody, CardFooter,Image,Divider,Link} from "@nextui-org/react";
import {FaNotesMedical} from "react-icons/fa"
import Nav from './Navbar';
const Fetchdetails = () => {
    const[med,settranscript] = useState([]);
    const medical = " Applying contenttypes.0001_initial... OK jnfknvkwjfnbjkvnkjbvnwkjThis version requires React 16.8 so that React hooks can be used. If you're used to version 2.x ofreact-speech-recognition or want to use an older version of React, you can see the old"
    const getresult = () =>{
        axios.get('http://localhost:3000/')
        .then(response =>
            {
                console.log(response.data)
                settranscript(response.data)
            }
        )
    }
    useEffect(()=>{
        getresult()
    },[])
  return (
    <>
    <Nav/>
    <div className=' mx-6 my-8 grid grid-cols-4 gap-4'>
      {/* {JSON.stringify(transcript)} */}
     {med.map((item)=>{
        return(
            <div key={item._id}>
            <Card className="max-w-[400px]">
    <CardHeader className="flex gap-3">
        <FaNotesMedical size="35"/>
        <div className="flex flex-col">
          <p className="text-md">Medical Transcript</p>
          <p className="text-small text-default-500">{item.date.substring(0,10)}</p>
        </div>
      </CardHeader>
      <Divider/>
        <CardBody>
            <p>{item.transcript.substring(0,130) + " ....."}</p>
        </CardBody>
       <Divider/>
       <CardFooter>
        <Link isExternal showAnchorIcon>
            Simplify medical prescription
        </Link>
       </CardFooter>
    </Card>
    </div>
        )
     })}
    
    
    </div>
    </>
  )
}

export default Fetchdetails