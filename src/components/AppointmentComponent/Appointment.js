import { useRef, useState } from "react";
import Webcam from "react-webcam";

function SymptomScan() {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [cameraOn, setCameraOn] = useState(false);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setCameraOn(false); // Close camera after capture
  };

  return (
    <>
      {/* Symptom Scan Section */}
      <section id="symptom-scan" className="appointment section">
        <div className="container">
          <form className="php-email-form">
            
            {/* Face Scan Capture */}
            <div className="row">
              <div className="col-md-12 form-group text-center">
                <h3>AI Face Scan</h3>
                <p>Scan your face for symptoms and stress detection.</p>

                {/* Show button first */}
                {!cameraOn && !capturedImage && (
                  <button
                    type="button"
                    className="btn btn-primary mt-3"
                    onClick={() => setCameraOn(true)}
                  >
                    Start Camera
                  </button>
                )}

                {/* Camera feed */}
                {cameraOn && (
                  <>
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      width="100%"
                      className="img-fluid rounded shadow mt-3"
                    />
                    <button
                      type="button"
                      className="btn btn-success mt-3"
                      onClick={capturePhoto}
                    >
                      Capture Face
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary mt-3 ms-2"
                      onClick={() => setCameraOn(false)}
                    >
                      Cancel
                    </button>
                  </>
                )}

                {/* Show captured image */}
                {capturedImage && !cameraOn && (
                  <>
                    <img
                      src={capturedImage}
                      alt="Captured"
                      className="img-fluid rounded shadow mt-3"
                    />
                    <button
                      type="button"
                      className="btn btn-secondary mt-3"
                      onClick={() => setCapturedImage(null)}
                    >
                      Retake
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Symptom Questionnaire */}
            <div className="row mt-4">
              <div className="col-md-6 form-group">
                <label htmlFor="sleep">How is your sleep quality?</label>
                <select name="sleep" id="sleep" className="form-select" required>
                  <option value="">Select</option>
                  <option value="good">Good</option>
                  <option value="disturbed">Disturbed</option>
                  <option value="insomnia">Insomnia</option>
                </select>
              </div>

              <div className="col-md-6 form-group">
                <label htmlFor="stress">How stressed do you feel?</label>
                <select name="stress" id="stress" className="form-select" required>
                  <option value="">Select</option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6 form-group">
                <label htmlFor="digestion">How is your digestion?</label>
                <select name="digestion" id="digestion" className="form-select" required>
                  <option value="">Select</option>
                  <option value="normal">Normal</option>
                  <option value="slow">Slow</option>
                  <option value="irregular">Irregular</option>
                </select>
              </div>

              <div className="col-md-6 form-group">
                <label htmlFor="energy">Energy Levels</label>
                <select name="energy" id="energy" className="form-select" required>
                  <option value="">Select</option>
                  <option value="high">High</option>
                  <option value="balanced">Balanced</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="notes"
                rows="4"
                placeholder="Additional notes (optional)"
              ></textarea>
            </div>

            <div className="text-center mt-4">
              <button type="submit">Analyze & Get Recommendations</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default SymptomScan;
