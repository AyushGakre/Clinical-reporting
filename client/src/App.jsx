import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dictaphone from "./components/Dictate";
import Dashboard from "./components/Dashboard";
import Fetchdetails from "./components/Fetchdetails";
export default function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/dictate" element={<Dictaphone/>}></Route>
      <Route path="/details" element={<Fetchdetails/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}



