import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser, FaUserMd } from "react-icons/fa";

function Login() {
  const [role, setRole] = useState("patient");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleRoleChange = (e) => setRole(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      role === "patient" &&
      formData.email === "ratneshranve@gmail.com" &&
      formData.password === "123456"
    ) {
      navigate("/patient-dashboard");
    } else if (
      role === "doctor" &&
      formData.email === "trishamishra@gmail.com" &&
      formData.password === "123456"
    ) {
      navigate("/doctor-dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div style={{ backgroundColor: "#f5f6fa", minHeight: "100vh" }}>
      <style>{`
  .service-item {
    background: #fff;
    transition: none !important;
  }
  .service-item:hover {
    background: #fff !important;
    box-shadow: none !important;
    transform: none !important;
  }
  .service-item * {
    color: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    transition: none !important;
  }
  .service-item:hover * {
    color: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    transition: none !important;
  }
`}</style>
      {/* Login Section styled like Services */}
      <section id="login" className="services section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Login</h2>
        </div>{/* End Section Title */}

        <div className="container">
          <div className="row justify-content-center gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                {/* Main icon removed */}
                <h3 className="mb-4">{role === "patient" ? "Patient Login" : "Doctor Login"}</h3>
                <div className="mb-4 d-flex justify-content-center gap-3">
                  <label className="d-flex align-items-center gap-1">
                    <input type="radio" value="patient" checked={role === "patient"} onChange={handleRoleChange} />
                    <FaUser /> Patient
                  </label>
                  <label className="d-flex align-items-center gap-1">
                    <input type="radio" value="doctor" checked={role === "doctor"} onChange={handleRoleChange} />
                    <FaUserMd /> Doctor
                  </label>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 text-start">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="mb-3 text-start">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
                  </div>
                  <button type="submit" className="btn w-100 mt-3" style={{ backgroundColor: "#007bff", color: "#fff" }}>
                    Login
                  </button>
                </form>
                <p className="mt-3">
                  Don't have an account? <a href="/register" style={{ color: "#007bff" }}>Register</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>{/* /Login Section */}
    </div>
  );
}

export default Login;