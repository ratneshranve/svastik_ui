function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact Us</h2>
          <p>
            Get in touch with the <strong>Svasthik</strong> team for queries,
            collaborations, or support. We’re here to help you on your wellness journey.
          </p>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-4">
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Location</h3>
                  <p>Ministry of Ayush, All India Institute of Ayurveda (AIIA), New Delhi</p>
                </div>
              </div>
              {/* End Info Item */}

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              {/* End Info Item */}

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>support@svasthik.ai</p>
                </div>
              </div>
              {/* End Info Item */}
            </div>
          </div>
        </div>
      </section>
      {/* /Contact Section */}
    </>
  );
}

export default Contact;
