import { Link } from "react-router-dom";

function Header() {
  
  return (
    <>
    
 <header id="header" className="header sticky-top">

    <div className="topbar d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:svasthik@gmail.com">svasthik@gmail.com</a></i>
          <i className="bi bi-phone d-flex align-items-center ms-4"><span>+91 9876543210</span></i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>{/* End Top Bar */}

    <div className="branding d-flex align-items-center">

      <div className="container position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center me-auto">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt=""> */}
          <h1 className="sitename">Svasthik</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/">Home</Link>  </li>
            <li><Link to="/about">About Us</Link>  </li>
            <li><a href="#services">Services</a></li>
            <li><a href="#doctors">Doctors</a></li>
            <li className="dropdown"><a href="#"><span>Account</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Register</a></li>
                <li className="dropdown"><a href="#"><span>Login</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><Link to="/patient-login">Patient Login</Link></li>
                    <li><Link to="/doctor-login">Doctor Login</Link></li>

                  </ul>
                </li>
              </ul>
            </li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <Link className="cta-btn d-none d-sm-block" to="appointment">Make an Appointment</Link>

      </div>

    </div>

  </header>
    

    
    </>
  );
}


export default Header;
