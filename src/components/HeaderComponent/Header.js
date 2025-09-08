import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header id="header" className="header sticky-top">

        {/* Top Bar */}
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <a href="mailto:svasthik@gmail.com">svasthik@gmail.com</a>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>+91 9876543210</span>
              </i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
        {/* End Top Bar */}

        {/* Navbar / Branding */}
        <div className="branding d-flex align-items-center" style={{ backgroundColor: "white" }}>
          <div className="container position-relative d-flex align-items-center justify-content-between">

            <a href="index.html" className="logo d-flex align-items-center me-auto">
              <h1 className="sitename">Svasthik</h1>
            </a>

            <nav id="navmenu" className="navmenu">
              <ul>
                <li><Link to="/" style={{ color: "#000" }}>Home</Link></li>
                <li><Link to="/services" style={{ color: "#000" }}>Services</Link></li>
                <li><Link to="/doctors" style={{ color: "#000" }}>Doctors</Link></li>
                <li className="dropdown">
                  <a href="#" style={{ color: "#000" }}>
                    <span>Account</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li><Link to="/register" style={{ color: "#000" }}>Register</Link></li>
                    <li><Link to="/login" style={{ color: "#000" }}>Login</Link></li>
                  </ul>
                </li>
                <li><Link to="/contact" style={{ color: "#000" }}>Contact</Link></li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <Link
              className="cta-btn d-none d-sm-block"
              to="/appointment"
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "8px 15px",
                borderRadius: "5px",
                textDecoration: "none",
              }}
            >
              Make an Appointment
            </Link>

          </div>
        </div>

      </header>

      {/* Inner CSS */}
      <style>
        {`
          .navmenu ul li a:hover {
            color: #007bff;
          }
          .cta-btn:hover {
            background-color: #0056b3;
            color: #fff;
          }
        `}
      </style>
    </>
  );
}

export default Header;
