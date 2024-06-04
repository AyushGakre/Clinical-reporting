import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dictaphone from "./components/Dictate";
import Dashboard from "./components/Dashboard";
export default function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/dictate" element={<Dictaphone/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}



