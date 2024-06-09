import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Dictaphone from "./components/Dictate";
import Dashboard from "./components/Dashboard";
import Fetchdetails from "./components/Fetchdetails";
import Translate from "./components/Translate";
import Login from "./components/Login";
import {SignedOut, SignIn, SignInButton, useAuth} from '@clerk/clerk-react'
export default function App(){
  const {isSignedIn} = useAuth()
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={ <Dashboard/>}></Route>
      <Route path="/dictate" element={isSignedIn ?<Dictaphone/>: <Navigate to="/sign-in"/>}></Route>
      <Route path="/details" element={<Fetchdetails/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/:id" element={<Translate/>}></Route>
      <Route path="/sign-in" element={
        isSignedIn ? <Navigate to='/dictate'/>:
        <SignedOut><SignIn path="/"/></SignedOut>
        }></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}



