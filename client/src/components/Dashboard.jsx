import React from 'react'
import Fetchdetails from './Fetchdetails'
import Nav from './Navbar'
import axios from 'axios'
import { Button ,Link,Input} from '@nextui-org/react'

const Dashboard = () => {
  const promt = "my name is ayush"
  return (
    <div >
      <Nav/>

      <div className="flex w-full flex-wrap md:flex-nowrap gap-4  items-center justify-center  mt-4">
        <p className="mr-2 text-xl ">Patient Name :</p> 
        <Input type="text" className="w-64 text-xl font-bold" placeholder="Enter Patient name"  /> 
      </div>

      <div className="relative w-full mt-8">
        <img src="https://cdn.pixabay.com/photo/2021/10/11/17/37/doctor-6701410_1280.jpg" alt="Background" className="w-full opacity-50 " />
        <Button as={Link} href="/dictate" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-3xl px-16 py-8" auto shadow size="large"
        >
          Start Recording

        </Button>

      </div> 

      <div className="flex justify-center mt-8 mb-8" >
        <Button className="bg-blue-500 text-black text-2xl px-16 py-8" auto shadow size="large">
          New Patient
        </Button>
      </div>

    </div>
  )
}

export default Dashboard