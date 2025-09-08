import React, { useState } from "react";

function Register() {
  const [role, setRole] = useState("patient");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleRoleChange = (e) => setRole(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register submitted:", role, formData);
    // Implement registration logic here
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
      <section className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Register</h2>
        </div>
        <div className="container">
          <div className="row justify-content-center gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative p-4">
                <h3 className="mb-4 text-center">{role === "patient" ? "Patient Register" : "Doctor Register"}</h3>
                <div className="mb-4 d-flex justify-content-center gap-3">
                  <label className="d-flex align-items-center gap-1">
                    <input type="radio" value="patient" checked={role === "patient"} onChange={handleRoleChange} />
                    Patient
                  </label>
                  <label className="d-flex align-items-center gap-1">
                    <input type="radio" value="doctor" checked={role === "doctor"} onChange={handleRoleChange} />
                    Doctor
                  </label>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 text-start">
                    <label className="form-label">Full Name</label>
                    <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="mb-3 text-start">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="mb-3 text-start">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
                  </div>
                  <div className="mb-3 text-start">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" name="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange} required />
                  </div>
                  <button type="submit" className="btn w-100" style={{ backgroundColor: "#007bff", color: "#fff" }}>Register</button>
                  <p className="mt-3 text-center" style={{ fontSize: "0.9rem" }}>
                    Already have an account? <a href="/login" style={{ color: "#007bff" }}>Login</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
