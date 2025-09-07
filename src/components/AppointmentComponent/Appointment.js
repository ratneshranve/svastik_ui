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

  const [step, setStep] = useState(1); // 1=scan, 2=questions, 3=doctors

  // Load models once
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

      // Detect face + expression
      const detections = await faceapi
        .detectSingleFace(webcamRef.current.video, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      if (detections && detections.expressions) {
        const best = Object.entries(detections.expressions).reduce((a, b) =>
          a[1] > b[1] ? a : b
        );
        const emotion = best[0];
        setExpression(emotion);
        mapEmotionToDosha(emotion);
        setStep(2); // Move to questions
      } else {
        setExpression("No face detected");
      }

      setCameraOn(false); // Close camera after capture
    }
  };

  const mapEmotionToDosha = (emotion) => {
    let d = "Balanced";
    let rec = "Keep up your healthy lifestyle! 🌿";

    if (emotion === "angry" || emotion === "fearful") {
      d = "Pitta imbalance";
      rec = "Try cooling therapies like Shirodhara, meditation, and avoid spicy food. 🧘‍♂️";
    } else if (emotion === "sad" || emotion === "disgusted") {
      d = "Kapha imbalance";
      rec = "Do yoga, eat light meals, and energize with herbs like Trikatu. 🥗";
    } else if (emotion === "surprised") {
      d = "Vata imbalance";
      rec = "Follow grounding routines, warm food, and oil massage. 💆‍♀️";
    } else if (emotion === "happy" || emotion === "neutral") {
      d = "Balanced Doshas";
      rec = "Maintain your lifestyle, you are in good health. 🌸";
    }

    setDosha(d);
    setRecommendation(rec);
  };

  return (
    <section id="appointment" className="appointment section">
      <div className="container text-center">
        <h3>AI Dosha Detection & Appointment</h3>

        {/* Step 1 - Face Scan */}
        {step === 1 && (
          <>
            {!cameraOn && !captured && (
              <button
                className="btn btn-primary"
                onClick={() => setCameraOn(true)}
              >
                Start Face Scan
              </button>
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
                  <button className="btn btn-success me-2" onClick={capturePhoto}>
                    Capture Face
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setCameraOn(false)}
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}

            {captured && (
              <div className="mt-3">
                <img
                  src={captured}
                  alt="Captured"
                  className="img-fluid rounded shadow"
                />
              </div>
            )}
          </>
        )}

        {/* Step 2 - Questions */}
        {step === 2 && (
          <>
            <h4 className="mt-3">Expression: {expression}</h4>
            <h4>Dosha: {dosha}</h4>
            <p>{recommendation}</p>

            <form className="mt-4 text-start">
              <div className="mb-3">
                <label>How is your sleep quality?</label>
                <select className="form-select">
                  <option>Good</option>
                  <option>Disturbed</option>
                  <option>Insomnia</option>
                </select>
              </div>
              <div className="mb-3">
                <label>How stressed do you feel?</label>
                <select className="form-select">
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High</option>
                </select>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setStep(3)}
              >
                Continue
              </button>
            </form>
          </>
        )}

        {/* Step 3 - Doctors */}
        {step === 3 && (
          <>
            <h4 className="mt-3">Suggested Doctors for {dosha}</h4>
            <ul className="list-group mt-3">
              <li className="list-group-item">Dr. Sharma – Ayurveda Specialist</li>
              <li className="list-group-item">Dr. Mehta – Stress Management</li>
              <li className="list-group-item">Dr. Kapoor – Diet & Lifestyle</li>
            </ul>

            <button className="btn btn-success mt-3">Book Appointment</button>
          </>
        )}
      </div>
    </section>
  );
}

export default Appointment;
