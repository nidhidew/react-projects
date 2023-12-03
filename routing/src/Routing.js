import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Contact from './forRouter/Contact'
import About from './forRouter/About'

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
            
            <Link to='/about'>About</Link><br></br>
            <Link to='/contact'>Contact</Link>
        
        <Routes>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
