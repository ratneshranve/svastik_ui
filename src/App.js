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
import PatientDashBoard from "./components/PatientDashBoardComponent/PatientDashBoard";
import DoctorsDashboard from "./components/DoctorsDashBoardComponent/DoctorsDashBoard";
import AdminDashboard from "./components/AdminsDashBoardComponent/AdminsDashBoard";
import Register from "./components/RegisterComponent/Register";
import Login from "./components/LoginComponent/Login";
import GeminiChatBot from "./components/AIChatbotComponent/AIChatbot";


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
      <Route path="/patient-dashboard" element={<PatientDashBoard />} />
      <Route path="/doctor-dashboard" element={<DoctorsDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chatbot" element={<GeminiChatBot />} />
    </Routes>
  </main>
<Footer />
  
    </>
  );
}


export default App;
