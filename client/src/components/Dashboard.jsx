import React from 'react';
import Nav from './Navbar';
import { Button, Link } from '@nextui-org/react';

const Dashboard = () => {
  return (
    <div>
      <Nav />
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 items-center justify-center mt-4">
        {/* Additional content can be added here */}
      </div>
      <div className="relative w-full mt-8">
        <img 
          src="https://cdn.pixabay.com/photo/2021/10/11/17/37/doctor-6701410_1280.jpg" 
          alt="Background" 
          className="w-full h-screen object-cover opacity-70"
        />
        <Button 
          as={Link} 
          href="/dictate" 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-3xl px-16 py-8 transition-transform duration-500 hover:scale-110 shadow-lg" 
          auto 
          shadow 
          size="large"
        >
          Start Recording
        </Button>
      </div> 
      <div className="flex justify-center mt-12 mb-12">
        <Button
          className="bg-blue-500 text-white text-2xl px-16 py-8 transition-transform duration-500 hover:scale-110 shadow-lg" 
          auto 
          shadow 
          size="large"
          
        >
          New Patient
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
