import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Services from './components/ServicesComponent/Services';
import Header from "./components/HeaderComponent/Header";
import Hero from "./components/HeroComponent/Hero";
import Appointment from "./components/AppointmentComponent/Appointment";
import Contact from "./components/ContactComponent/Contact";
import Footer from "./components/FooterComponent/Footer";
import Doctors from "./components/DoctorsComponent/Doctors";

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
      <Route path="/services" element={<Services />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />
    </Routes>
  </main>
<Footer />
  
    </>
  );
}


export default App;
