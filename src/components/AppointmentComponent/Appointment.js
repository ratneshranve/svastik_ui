import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";

function Appointment() {
  const webcamRef = useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [expression, setExpression] = useState("Detecting...");
  const [dosha, setDosha] = useState("Analyzing...");
  const [recommendation, setRecommendation] = useState("");

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
      setModelsLoaded(true);
    };
    loadModels();
  }, []);

  useEffect(() => {
    let interval;
    if (modelsLoaded) {
      interval = setInterval(async () => {
        if (
          webcamRef.current &&
          webcamRef.current.video.readyState === 4
        ) {
          const video = webcamRef.current.video;
          const detections = await faceapi
            .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceExpressions();

          if (detections && detections.expressions) {
            const best = Object.entries(detections.expressions).reduce(
              (a, b) => (a[1] > b[1] ? a : b)
            );
            const emotion = best[0]; // happy, sad, angry, etc.
            setExpression(emotion);
            mapEmotionToDosha(emotion);
          }
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [modelsLoaded]);

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
    <section id="symptom-scan" className="appointment section">
      <div className="container text-center">
        <h3>AI Face Scan for Dosha Detection</h3>
        <p>Real-time emotion → Dosha mapping based on Ayurveda principles.</p>

        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={400}
          height={300}
          className="rounded shadow"
        />

        <h4 className="mt-3">
          Expression: <span className="text-primary">{expression}</span>
        </h4>
        <h4>
          Dosha: <span className="text-danger">{dosha}</span>
        </h4>
        <p className="mt-2">{recommendation}</p>
      </div>
    </section>
  );
}

export default Appointment;
