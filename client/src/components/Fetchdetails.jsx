import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card, CardHeader, CardBody, CardFooter,Image,Divider,Link, Skeleton} from "@nextui-org/react";
import {FaNotesMedical} from "react-icons/fa"
import Nav from './Navbar';
const Fetchdetails = () => {
    const[med,settranscript] = useState([]);
    const[toogle,settoogle] = useState(true)
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
    <div>
    <Nav/>
    <div className=' mx-6 my-8 grid grid-cols-4 gap-4'>
      {/* {JSON.stringify(transcript)} */}
     {med.map((item)=>{
        return(
            <div key={item._id}>
              <Link href={`/${item._id}`}>
            <Card className="max-w-[400px]" >
    <CardHeader className="flex gap-3">
        <FaNotesMedical size="35"/>
        <div className="flex flex-col">
          <p className="text-md">{item.name}</p>
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
            Translate medical prescription
        </Link>
       </CardFooter>
    </Card>
    </Link>
    </div>
        )
     })}
    
    
    </div>
    </div>
  )
}

export default Fetchdetails