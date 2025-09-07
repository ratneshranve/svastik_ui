function Doctors() {
  return (
    <>
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

export default Doctors;
