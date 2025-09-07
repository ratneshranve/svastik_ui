function Footer() {
  return (
    <>
      <footer id="footer" className="footer light-background">

        <div className="container footer-top">
          <div className="row gy-4">

            {/* About Section */}
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">Svasthik</span>
              </a>
              <div className="footer-contact pt-3">
                <p>All India Institute of Ayurveda</p>
                <p>New Delhi, India</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+91 98765 43210</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>contact@svasthik.in</span>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Therapies</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Automated Scheduling</a></li>
                <li><a href="#">AI Symptom Scan</a></li>
                <li><a href="#">Therapy Recommendations</a></li>
                <li><a href="#">AyurBot Assistant</a></li>
                <li><a href="#">Patient Dashboard</a></li>
              </ul>
            </div>

            {/* Therapies */}
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Panchakarma</h4>
              <ul>
                <li><a href="#">Vamana</a></li>
                <li><a href="#">Virechana</a></li>
                <li><a href="#">Basti</a></li>
                <li><a href="#">Nasya</a></li>
                <li><a href="#">Raktamokshana</a></li>
              </ul>
            </div>

            {/* Extra Info */}
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Research</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Wellness Blog</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span> 
            <strong className="px-1 sitename">Svasthik</strong> 
            <span>All Rights Reserved</span>
          </p>
          <p>
            <small>Developed for SIH 2025 | Ministry of Ayush</small>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
 