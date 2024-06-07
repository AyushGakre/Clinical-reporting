import React, { useState } from 'react';
import Fetchdetails from './Fetchdetails';
import Nav from './Navbar';
import axios from 'axios';
import { Input } from "@nextui-org/input";
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem,Image,Link} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/button";
import {RiSpeakFill} from 'react-icons/ri'

const Login = () => {
  const [showVerification, setShowVerification] = useState(false);
  const [name, setName] = useState('');
  const [doctorID, setDoctorID] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [buttonText, setButtonText] = useState('Send Verification Code');
  const [showInfoPopUp, setShowInfoPopUp] = useState(false); // State for the info pop-up

  const handleSendVerificationCode = () => {
    setShowVerification(true);
    setButtonText('Login');
  };

  const handleLogin = () => {
    setShowVerification(true);
  };

  const handleInfoIconClick = () => {
    setShowInfoPopUp(true);
  };

  return (
    
    <div> <Navbar isBordered>
    <NavbarBrand>
      <Image 
      width={55}
      src='https://www.karnataka.gov.in/frontend/assets/img/Seal_of_Karnataka.png'/>
      <p className="font-bold text-inherit">JayaDeva Hosptital</p>
    </NavbarBrand>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
    <NavbarItem>
        <Link color="foreground" href="/login">
          Login
        </Link>
      </NavbarItem>
   
    </NavbarContent>
    <NavbarContent justify="end">
      
    </NavbarContent>
  </Navbar>
        
      {/* s<Nav/> */}

      <div className="flex h-screen w-full items-center justify-center bg-gradient-to-tr from-gray-100 via-blue-100 to-gray-100">
        <div className="flex flex-col gap-8 p-16 bg-white shadow-xl rounded-2xl w-full max-w-4xl">
          <Input 
            type="name" 
            label="Name" 
            placeholder="Enter your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-3xl font-bold p-8 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Input 
            type="id" 
            label="Doctor ID" 
            placeholder="Enter your ID" 
            value={doctorID}
            onChange={(e) => setDoctorID(e.target.value)}
            className="w-full text-3xl font-bold p-8 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {showVerification && (
            <Input 
              type="text" 
              label="Verification Code" 
              placeholder="Enter verification code" 
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="w-full text-3xl font-bold p-8 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <div className="relative">
            <button 
              className="absolute right-3 top-3 bg-transparent border-none cursor-pointer text-sm"
              onClick={handleInfoIconClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 1a9 9 0 100 18 9 9 0 000-18zM9 14.5a1 1 0 012 0V11a1 1 0 112 0v3.5a3 3 0 11-6 0zM11 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <button 
            onClick={showVerification ? handleLogin : handleSendVerificationCode}
            className="w-48 text-sm font-bold p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {buttonText}
          </button>
        </div>
      </div>
      {showInfoPopUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg">The verification code is sent to your registered mobile number.</p>
            <button onClick={() => setShowInfoPopUp(false)} className="text-lg text-blue-500 mt-4 focus:outline-none">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
