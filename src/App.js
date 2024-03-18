import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar1 from './Components/Navbar/Navbar1.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/HomePage/Home.jsx';
import MobileDev from './Components/Mobile_dev/Mobile_dev.jsx'
import WebDev from './Components/Web_dev/Web_dev.jsx'
import Service from './Components/ServicePage/Service.jsx'
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/AboutUs/About.jsx';
import Blockchain from './Components/Blockchain/Blockchain.jsx';
import GameDev from './Components/Game_dev/Game_dev.jsx';
import Design from './Components/DesignPage/Design.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar1/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mobile-development' element={<MobileDev/>}/>
        <Route path='/web-development' element={<WebDev/>}/>
        <Route path='/game-development' element={<GameDev/>}/>
        <Route path='/blockchain' element={<Blockchain/>}/>
        <Route path='/design' element={<Design/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
        
      </Router>
    </div>
  );
}

export default App;
