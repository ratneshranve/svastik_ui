import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";

function Appointment() {
  const webcamRef = useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [cameraOn, setCameraOn] = useState(false);
  const [captured, setCaptured] = useState(null);

  const [expression, setExpression] = useState("");
  const [dosha, setDosha] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [diseases, setDiseases] = useState([]);
  const [therapies, setTherapies] = useState([]);

  const [step, setStep] = useState(1);
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  // Load face-api models
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
      setModelsLoaded(true);
    };
    loadModels();
  }, []);

  const capturePhoto = async () => {
    if (webcamRef.current && webcamRef.current.video.readyState === 4) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCaptured(imageSrc);

      const detections = await faceapi
        .detectSingleFace(webcamRef.current.video, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      if (detections && detections.expressions) {
        const best = Object.entries(detections.expressions).reduce((a, b) => (a[1] > b[1] ? a : b));
        const emotion = best[0];
        setExpression(emotion);
        mapEmotionToDosha(emotion);
        setStep(2);
      } else {
        setExpression("No face detected");
      }

      setCameraOn(false);
    }
  };

  // Map emotion → Dosha, Diseases & Therapies
  const mapEmotionToDosha = (emotion) => {
    let d = "Balanced";
    let rec = "Maintain your lifestyle, you are in good health. 🌸";
    let dis = ["No significant disease risk detected"];
    let th = ["General Wellness Advice"];

    if (emotion === "angry" || emotion === "fearful") {
      d = "Pitta imbalance";
      rec = "Cooling therapies like Shirodhara, meditation, and avoid spicy food. 🧘‍♂️";
      dis = ["Acidity", "Ulcers", "Skin rashes", "Hypertension", "Liver disorders"];
      th = ["Shirodhara", "Cooling herbal packs", "Meditation"];
    } else if (emotion === "sad" || emotion === "disgusted") {
      d = "Kapha imbalance";
      rec = "Yoga, light meals, energize with herbs like Trikatu. 🥗";
      dis = ["Obesity", "Diabetes", "Asthma", "Sinusitis", "Depression"];
      th = ["Abhyanga", "Virechana", "Light exercise routines"];
    } else if (emotion === "surprised") {
      d = "Vata imbalance";
      rec = "Grounding routines, warm food, oil massage. 💆‍♀️";
      dis = ["Anxiety", "Insomnia", "Arthritis", "Constipation", "Migraine"];
      th = ["Basti", "Nasya", "Warm oil massage"];
    } else if (emotion === "happy" || emotion === "neutral") {
      d = "Balanced Doshas";
      rec = "Keep up your healthy lifestyle. 🌿";
      dis = ["No significant disease risk detected"];
      th = ["General wellness advice", "Routine checkups"];
    }

    setDosha(d);
    setRecommendation(rec);
    setDiseases(dis);
    setTherapies(th);
  };

  const handleBookAppointment = () => {
    setAppointmentBooked(true);
  };

  return (
    <section id="appointment" className="appointment section" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "50px 0" }}>
      <div className="container text-center" style={{ maxWidth: "700px", backgroundColor: "#ffffff", padding: "30px", borderRadius: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
        <h3 style={{ marginBottom: "30px", color: "#007bff" }}>AI Dosha Detection & Appointment</h3>

        {/* Step 1 - Face Scan */}
        {step === 1 && (
          <>
            {!cameraOn && !captured && (
              <button className="btn btn-primary btn-lg" onClick={() => setCameraOn(true)}>Start Face Scan</button>
            )}

            {cameraOn && (
              <>
                <Webcam
                  ref={webcamRef}
                  audio={false}
                  screenshotFormat="image/jpeg"
                  width={400}
                  height={300}
                  className="rounded shadow mt-3"
                />
                <div className="mt-3">
                  <button className="btn btn-success me-2" onClick={capturePhoto}>Capture Face</button>
                  <button className="btn btn-secondary" onClick={() => setCameraOn(false)}>Cancel</button>
                </div>
              </>
            )}

            {captured && (
              <div className="mt-3">
                <img src={captured} alt="Captured" className="img-fluid rounded shadow" />
              </div>
            )}
          </>
        )}

        {/* Step 2 - Questions & Symptoms */}
        {step === 2 && (
          <>
            <h4 className="mt-3">Expression: {expression}</h4>
            <h4>Dosha: {dosha}</h4>
            <p>{recommendation}</p>

            <h5>Possible Diseases:</h5>
            <ul className="list-group mb-3">
              {diseases.map((d, idx) => (
                <li key={idx} className="list-group-item">{d}</li>
              ))}
            </ul>

            <h5>Recommended Therapies:</h5>
            <ul className="list-group mb-3">
              {therapies.map((t, idx) => (
                <li key={idx} className="list-group-item">{t}</li>
              ))}
            </ul>

            <form className="mt-4 text-start">
              <div className="mb-3">
                <label>Sleep Quality</label>
                <select className="form-select">
                  <option>Good</option>
                  <option>Disturbed</option>
                  <option>Insomnia</option>
                </select>
              </div>
              <div className="mb-3">
                <label>Stress Level</label>
                <select className="form-select">
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High</option>
                </select>
              </div>
              <div className="mb-3">
                <label>Digestive Health</label>
                <select className="form-select">
                  <option>Good</option>
                  <option>Average</option>
                  <option>Poor</option>
                </select>
              </div>
              <button type="button" className="btn btn-primary w-100 mt-3" onClick={() => setStep(3)}>Continue</button>
            </form>
          </>
        )}

        {/* Step 3 - Doctors */}
        {step === 3 && !appointmentBooked && (
          <>
            <h4 className="mt-3">Suggested Doctors for {dosha}</h4>
            <ul className="list-group mt-3" style={{ padding: 0 }}>
              {["Dr. Sharma – Ayurveda Specialist", "Dr. Mehta – Stress Management", "Dr. Kapoor – Diet & Lifestyle"].map((doc, idx) => (
                <li
                  key={idx}
                  className="list-group-item doctor-item"
                  style={{
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    borderRadius: "8px",
                    marginBottom: "10px",
                    padding: "15px 20px",
                    backgroundColor: "#f8f9fa",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#007bff";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.transform = "scale(1.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#f8f9fa";
                    e.currentTarget.style.color = "#000000";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {doc}
                </li>
              ))}
            </ul>
            <button className="btn btn-success w-100 mt-3" onClick={handleBookAppointment}>Book Appointment</button>
          </>
        )}

        {/* Appointment Booked Message */}
        {step === 3 && appointmentBooked && (
          <div className="alert alert-success mt-4" role="alert">
            Appointment booked successfully!
          </div>
        )}

      </div>
    </section>
  );
}

export default Appointment;
