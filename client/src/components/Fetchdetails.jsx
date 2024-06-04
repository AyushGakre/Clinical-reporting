import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fetchdetails = () => {
    const[med,settranscript] = useState([]);
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
      {/* {JSON.stringify(transcript)} */}
     {med.map((item)=>{
        return(
            <div className=' mb-4 border-b-2'>
            <p className=' font-bold'>Medical Transcript</p>
            <span>{item.date.substring(0,10)}</span>
            <br></br>
            {item.transcript}
            </div>
        )
     })}
    
    </div>
  )
}

export default Fetchdetails