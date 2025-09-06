function Appointment() {
  
  return (
    <>
    
 <section id="appointment" className="appointment section">
  <div className="container">

    <form className="php-email-form">
      <div className="row">
        <div className="col-md-4 form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="col-md-4 form-group mt-3 mt-md-0">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="col-md-4 form-group mt-3 mt-md-0">
          <input
            type="tel"
            className="form-control"
            name="phone"
            id="phone"
            placeholder="Your Phone"
            required
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4 form-group">
          <input
            type="datetime-local"
            name="date"
            className="form-control"
            id="date"
            placeholder="Appointment Date"
            required
          />
        </div>
        <div className="col-md-4 form-group mt-3 mt-md-0">
          <select name="department" id="department" className="form-select" required>
            <option value="">Select Department</option>
            <option value="cardiology">Cardiology</option>
            <option value="neurology">Neurology</option>
            <option value="orthopedics">Orthopedics</option>
          </select>
        </div>
        <div className="col-md-4 form-group mt-3 mt-md-0">
          <select name="doctor" id="doctor" className="form-select" required>
            <option value="">Select Doctor</option>
            <option value="dr_smith">Dr. Smith</option>
            <option value="dr_jones">Dr. Jones</option>
            <option value="dr_williams">Dr. Williams</option>
          </select>
        </div>
      </div>

      <div className="form-group mt-3">
        <textarea
          className="form-control"
          name="message"
          rows="5"
          placeholder="Message (Optional)"
        ></textarea>
      </div>

      <div className="text-center mt-3">
        <button type="submit">Make an Appointment</button>
      </div>
    </form>

  </div>
</section>
    
    </>
  );
}


export default Appointment;
