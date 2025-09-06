function Hero() {
  
  return (
    <>
    
 {/* Hero Section */}
    <section id="hero" className="hero section light-background">

      <img src="assets/img/ayur.png" alt="" data-aos="fade-in"/>

      <div className="container position-relative">

        <div className="welcome position-relative" data-aos="fade-down" data-aos-delay="100">
          <h2>WELCOME TO SVASTHIK</h2>
          <p>Where Ayurveda Meets Modern IT Solutions</p>
        </div>{/* End Welcome */}

        <div className="content row gy-4">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="why-box" data-aos="zoom-out" data-aos-delay="200">
              <h3>Why Choose Svasthik?</h3>
              <p>
                Svasthik blends the authenticity of Panchakarma with modern digital solutions, offering automated therapy scheduling, real-time progress tracking, and personalized recovery milestones. With smart notifications, seamless communication, and data-driven insights, we ensure consistent, patient-centric care across all centers.
              </p>

            </div>
          </div>{/* End Why Box */}

          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="d-flex flex-column justify-content-center">
              <div className="row gy-4">

                

               

             
              </div>
            </div>
          </div>
        </div>{/* End  Content*/}

      </div>
    
    </section>{/* /Hero Section */}
     
    {/* Services Section */}
<section id="services" className="services section">

  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Our Services</h2>
    <p>Holistic digital platform for Panchakarma therapy scheduling, patient care, and AI-powered wellness support.</p>
  </div>{/* End Section Title */}

  <div className="container">

    <div className="row gy-4">

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="fas fa-calendar-check"></i>
          </div>
          <a href="#" className="stretched-link">
            <h3>Automated Scheduling</h3>
          </a>
          <p>Seamlessly book, reschedule, and manage Panchakarma therapy sessions with reminders and notifications.</p>
        </div>
      </div>{/* End Service Item */}

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="fas fa-bell"></i>
          </div>
          <a href="#" className="stretched-link">
            <h3>Care Notifications</h3>
          </a>
          <p>Receive pre & post therapy care instructions instantly via app, SMS, or email for better recovery.</p>
        </div>
      </div>{/* End Service Item */}

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="fas fa-camera"></i>
          </div>
          <a href="#" className="stretched-link">
            <h3>Face-Symptom Scan</h3>
          </a>
          <p>AI-powered facial analysis to detect stress or imbalance and suggest relevant Panchakarma therapies.</p>
        </div>
      </div>{/* End Service Item */}

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="fas fa-clipboard-list"></i>
          </div>
          <a href="#" className="stretched-link">
            <h3>Hybrid Symptom Detection</h3>
          </a>
          <p>Combines AI analysis with symptom questionnaires when AI confidence is low, ensuring accuracy.</p>
        </div>
      </div>{/* End Service Item */}

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="fas fa-robot"></i>
          </div>
          <a href="#" className="stretched-link">
            <h3>AyurBot Assistant</h3>
          </a>
          <p>24/7 AI chatbot for patient queries, therapy details, lifestyle advice, and Ayurveda guidance.</p>
        </div>
      </div>{/* End Service Item */}

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <a href="#" className="stretched-link">
            <h3>Progress Tracking</h3>
          </a>
          <p>Interactive dashboards with gamified healing journeys, progress bars, badges, and wellness feedback loops.</p>
        </div>
      </div>{/* End Service Item */}

    </div>

  </div>

</section>{/* /Services Section */}

    {/* Doctors Section */}
<section id="doctors" className="doctors section">

  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Our Ayurveda Experts</h2>
    <p>Meet our panel of experienced Ayurvedic doctors and Panchakarma specialists who guide your healing journey.</p>
  </div>{/* End Section Title */}

  <div className="container">

    <div className="row gy-4">

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <div className="team-member d-flex align-items-start">
          <div className="pic"><img src="assets/img/doctors/doctor-ayur1.jpg" className="img-fluid" alt=""/></div>
          <div className="member-info">
            <h4>Dr. Anjali Sharma</h4>
            <span>Chief Panchakarma Specialist</span>
            <p>Over 15 years of expertise in Panchakarma therapies, holistic detox, and Ayurvedic rejuvenation treatments.</p>
            <div className="social">
              <a href=""><i className="bi bi-twitter-x"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>{/* End Team Member */}

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
        <div className="team-member d-flex align-items-start">
          <div className="pic"><img src="assets/img/doctors/doctor-ayur2.jpg" className="img-fluid" alt=""/></div>
          <div className="member-info">
            <h4>Dr. Rajesh Verma</h4>
            <span>Ayurvedic Consultant</span>
            <p>Specialist in Dosha analysis, lifestyle management, and personalized Ayurveda-based therapy planning.</p>
            <div className="social">
              <a href=""><i className="bi bi-twitter-x"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>{/* End Team Member */}

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
        <div className="team-member d-flex align-items-start">
          <div className="pic"><img src="assets/img/doctors/doctor-ayur3.jpg" className="img-fluid" alt=""/></div>
          <div className="member-info">
            <h4>Dr. Kavita Nair</h4>
            <span>Herbal Medicine Expert</span>
            <p>Dedicated to prescribing safe and effective Ayurvedic medicines along with diet and lifestyle advice.</p>
            <div className="social">
              <a href=""><i className="bi bi-twitter-x"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>{/* End Team Member */}

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
        <div className="team-member d-flex align-items-start">
          <div className="pic"><img src="assets/img/doctors/doctor-ayur4.jpg" className="img-fluid" alt=""/></div>
          <div className="member-info">
            <h4>Dr. Mohan Iyer</h4>
            <span>Wellness & Lifestyle Coach</span>
            <p>Helps patients integrate Panchakarma benefits with modern lifestyle practices for long-term wellness.</p>
            <div className="social">
              <a href=""><i className="bi bi-twitter-x"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>{/* End Team Member */}

    </div>

  </div>

</section>{/* /Doctors Section */}

    
    </>
  );
}


export default Hero;
