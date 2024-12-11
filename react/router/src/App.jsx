import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login/>}></Route>
          </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
