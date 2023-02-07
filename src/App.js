// Pages
import  Home  from "./components/Home";
import  About  from "./components/About";
import Contact from "./components/Contact";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFund from "./components/NotFund";


import { Route, Routes } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className="container"> 
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/*" element={<NotFund/>} />
    </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
