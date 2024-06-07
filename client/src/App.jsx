import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dictaphone from "./components/Dictate";
import Dashboard from "./components/Dashboard";
import Fetchdetails from "./components/Fetchdetails";
import Translate from "./components/Translate";
import Login from "./components/Login";
export default function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/dictate" element={<Dictaphone/>}></Route>
      <Route path="/details" element={<Fetchdetails/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/:id" element={<Translate/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}



