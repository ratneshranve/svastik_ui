import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/AboutComponent/About';
import Header from "./components/HeaderComponent/Header";
import Hero from "./components/HeroComponent/Hero";
import Appointment from "./components/AppointmentComponent/Appointment";
import Contact from "./components/ContactComponent/Contact";
import Footer from "./components/FooterComponent/Footer";

function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
  <main className="main">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </main>
<Footer />
  
    </>
  );
}


export default App;
