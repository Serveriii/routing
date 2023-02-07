import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Kello from "./kello";
import  Home  from "./Home";
import  About  from "./About";
import Contact from "./Contact";
// Styles
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../themes';
import { GlobalStyles } from '../global';


export default function Navbar() {
  const [theme, setTheme] = useState('dark')
  
  const toggleTheme = () => {
    theme === "light" ?  setTheme("dark") : setTheme("light");
  }
 
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <Link class='navbar-brand' to="/" element={<Home/> }>SPA</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav">
        <Link class='nav-link nav-item' to="/" element={<Home/> }>Home</Link>
        <Link class='nav-link nav-item' to="/about" element={<About/> }>About</Link>
        <Link class='nav-link nav-item' to="/contact" element={<Contact/> }>Contact</Link>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <>
            <GlobalStyles/>
            <button onClick={toggleTheme} className="btn btn-secondary">Switch theme</button>
            </>
        </ThemeProvider>
        <Kello/>

      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

