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
     
      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4 gx-5">

            <div
              className="col-lg-6 position-relative align-self-start"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                className="glightbox pulsating-play-btn"
              ></a>
            </div>

            <div
              className="col-lg-6 content"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>About Svasthik</h3>
              <p>
                <strong>Svasthik</strong> is an innovative digital platform developed 
                under the Ministry of Ayush (SIH 2025) to modernize Panchakarma 
                patient management. It bridges traditional Ayurveda with modern 
                technology by offering AI-driven symptom detection, therapy scheduling, 
                real-time patient tracking, and personalized healing journeys.
              </p>
              <ul>
                <li>
                  <i className="fa-solid fa-vial-circle-check"></i>
                  <div>
                    <h5>AI-Powered Symptom Detection</h5>
                    <p>
                      Advanced face-scan analysis combined with hybrid 
                      questionnaires to recommend Panchakarma therapies 
                      with explainable AI support.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-pump-medical"></i>
                  <div>
                    <h5>Smart Therapy Scheduling</h5>
                    <p>
                      Patients can seamlessly book, reschedule, and receive 
                      pre & post-care notifications via app, SMS, or email.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-heart-circle-xmark"></i>
                  <div>
                    <h5>Holistic Healing Journey</h5>
                    <p>
                      Gamified dashboards, progress tracking, and wellness 
                      feedback loops that keep patients engaged in their 
                      Panchakarma recovery process.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
      {/* /About Section */}
    

    

    

    
    </>
  );
}


export default Hero;
