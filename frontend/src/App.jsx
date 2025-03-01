import React, { useState } from 'react'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import Coursess from './coursess/coursess'
import Signup from "./components/Signup"

import About from './components/About'
import { Toaster } from 'react-hot-toast';



function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      {/* <Home/>
    <Courses/> */}
      <Routes>
        <Route path="/" element={<Home setSearchQuery={setSearchQuery} searchQuery={searchQuery} />} />
        <Route path="/courses" element={<Coursess setSearchQuery={setSearchQuery} searchQuery={searchQuery} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
