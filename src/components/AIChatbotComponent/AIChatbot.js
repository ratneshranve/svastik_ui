import React, { useState } from "react";

const API_KEY = "AIzaSyBV1rJpJDbDZVDmMsVao7DAmi47DxlWof0";
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

// Example doctor data for demonstration
const doctorsByProblem = {
  "stress": [
    { name: "Dr. Mehta", specialty: "Stress Management", location: "Svasthik Clinic, Delhi" },
    { name: "Dr. Kapoor", specialty: "Ayurveda", location: "Ayur Wellness, Mumbai" }
  ],
  "skin": [
    { name: "Dr. Sharma", specialty: "Skin & Panchakarma", location: "Ayur Skin Care, Pune" }
  ],
  "digestive": [
    { name: "Dr. Rao", specialty: "Digestive Health", location: "Ayur Digest, Bangalore" }
  ],
  "default": [
    { name: "Dr. Sinha", specialty: "General Ayurveda", location: "Svasthik Clinic, Delhi" }
  ]
};

function getDoctors(problemText) {
  const text = problemText.toLowerCase();
  if (text.includes("stress") || text.includes("anxiety")) return doctorsByProblem.stress;
  if (text.includes("skin") || text.includes("rash")) return doctorsByProblem.skin;
  if (text.includes("digestion") || text.includes("digestive") || text.includes("constipation")) return doctorsByProblem.digestive;
  return doctorsByProblem.default;
}

function AIChatBot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Welcome! Ask me anything about Panchakarma therapies, Ayurveda, or wellness." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    const prompt = `You are Svasthik_bot, an expert Ayurveda assistant. Reply in short, friendly, conversational sentences as if you are a person, not an AI or bot. Only answer questions related to Panchakarma therapies, Ayurveda, and holistic wellness. If the question is unrelated, politely guide the user back to Panchakarma or Ayurveda topics. Also, suggest nearby doctors according to the user's problem. User asked: "${input}"`;

    try {
      const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });
      const data = await response.json();
      const botText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't find an answer related to Panchakarma.";

      // Suggest doctors based on the user's question
      const doctors = getDoctors(input);
      let doctorSuggestion = "\n\n**Nearby Doctors:**\n";
      doctors.forEach(doc => {
        doctorSuggestion += `• ${doc.name} (${doc.specialty}) - ${doc.location}\n`;
      });

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botText + doctorSuggestion }
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, there was an error connecting to Gemini API." }
      ]);
    }
    setInput("");
    setLoading(false);
  };

  // Use #91ADC8 for background and match heading style
  const mainBg = darkMode ? "#181818" : "#91ADC8";
  const cardBg = darkMode ? "#23272f" : "#fff";
  const headerColor = darkMode ? "#fff" : "#222";
  const inputBg = darkMode ? "#181818" : "#fff";
  const inputColor = darkMode ? "#fff" : "#333";

  return (
    <section
      id="ai-chatbot"
      className="services section"
      style={{
        background: mainBg,
        minHeight: "100vh",
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div className="container-fluid" style={{ height: "100vh" }}>
        <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div
            className="col-12 d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <div
              className="service-item position-relative p-0"
              style={{
                width: "75vw", // 3:4 ratio of viewport width
                height: "75vh", // 3:4 ratio of viewport height
                maxWidth: "900px",
                minWidth: "320px",
                borderRadius: 20,
                background: cardBg,
                boxShadow: darkMode
                  ? "0 8px 32px rgba(0,0,0,0.7)"
                  : "0 8px 32px rgba(0,0,0,0.12)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                position: "relative"
              }}
            >
              {/* Theme toggle icon moved to top right, away from heading */}
              <button
                style={{
                  position: "absolute",
                  top: 18,
                  right: 24,
                  background: "transparent",
                  border: "none",
                  color: headerColor,
                  fontSize: 26,
                  cursor: "pointer",
                  zIndex: 2
                }}
                onClick={() => setDarkMode((d) => !d)}
                aria-label="Toggle dark mode"
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {darkMode ? "🌙" : "☀️"}
              </button>
              <div className="section-title" style={{ padding: "32px 0 10px 0" }}>
                <h2
                  style={{
                    fontWeight: 700,
                    fontSize: "2.2rem",
                    color: headerColor,
                    letterSpacing: "1px",
                    marginBottom: "10px",
                    fontFamily: "inherit",
                    textAlign: "center"
                  }}
                >
                  Svasthik_bot
                </h2>
                <p style={{ color: "#555", fontSize: "1.1rem", textAlign: "center" }}>
                  Ask anything about Panchakarma, Ayurveda, or wellness.
                </p>
              </div>
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "18px 12px",
                  background: darkMode ? "#23272f" : "#f8f9fa"
                }}
              >
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      justifyContent: msg.sender === "user" ? "flex-end" : "flex-start"
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        background:
                          msg.sender === "user"
                            ? (darkMode ? "#007bff" : "#007bff")
                            : (darkMode ? "#333" : "#e9ecef"),
                        color:
                          msg.sender === "user"
                            ? "#fff"
                            : darkMode
                            ? "#fff"
                            : "#333",
                        borderRadius: 16,
                        padding: "8px 16px",
                        maxWidth: "80%",
                        wordBreak: "break-word",
                        marginBottom: 8,
                        fontSize: 15,
                        alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                        whiteSpace: "pre-line"
                      }}
                    >
                      {msg.text}
                    </span>
                  </div>
                ))}
                {loading && (
                  <div style={{ display: "flex", justifyContent: "flex-start" }}>
                    <span
                      style={{
                        display: "inline-block",
                        background: darkMode ? "#333" : "#e9ecef",
                        color: darkMode ? "#fff" : "#333",
                        borderRadius: 16,
                        padding: "8px 16px",
                        maxWidth: "80%",
                        wordBreak: "break-word",
                        marginBottom: 8,
                        fontSize: 15
                      }}
                    >
                      Typing...
                    </span>
                  </div>
                )}
              </div>
              <form
                style={{
                  display: "flex",
                  gap: 8,
                  padding: "12px",
                  background: cardBg,
                  borderTop: darkMode ? "1px solid #333" : "1px solid #e9ecef"
                }}
                onSubmit={handleSend}
              >
                <input
                  type="text"
                  className="form-control"
                  style={{
                    flex: 1,
                    borderRadius: 16,
                    border: "1px solid #ccc",
                    padding: "10px 14px",
                    fontSize: 16,
                    background: inputBg,
                    color: inputColor,
                    outline: "none"
                  }}
                  placeholder="Ask about Panchakarma..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={loading}
                  autoFocus
                />
                <button
                  type="submit"
                  className="btn"
                  style={{
                    borderRadius: 16,
                    background: "#007bff",
                    color: "#fff",
                    border: "none",
                    padding: "0 18px",
                    fontSize: 16,
                    fontWeight: 600,
                    cursor: "pointer"
                  }}
                  disabled={loading}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIChatBot;