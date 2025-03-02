import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Project/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
