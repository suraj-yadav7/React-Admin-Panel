import React, { useState } from "react";
import './App.css'
import Home from './component/Home'
import Header from './component/Header'
import Sidebar from './component/Sidebar'

export default function App() {
  
  const [openSideToggle, setOpenSideToggle] = useState(false)
  
  const openSidebar = () => {
    setOpenSideToggle(!openSideToggle)
  }
  
  return (
    <div className='grid-container' >
      <Header openSidebar={openSidebar} />
      <Home />
      <Sidebar openSidebar={openSidebar} openSideToggle={openSideToggle} />
    </div>
  )
}
