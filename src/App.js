import  Home  from "./Components/Home";
import  About  from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import NotFund from "./Components/NotFund";
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
      <Route path="/contactus" element={<Contact/>} />
      <Route path="/*" element={<NotFund/>} />
    </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
