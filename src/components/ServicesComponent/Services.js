function Services() {
  return (
    <>
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
    </>
  );
}

export default Services;
