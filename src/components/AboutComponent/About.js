function About() {
  return (
    <>
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

export default About;
