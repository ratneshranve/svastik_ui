import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { useNavigate } from "react-router-dom"; // Add this import

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function PatientDashboard() {
  const navigate = useNavigate(); // Add this hook

  const performanceData = {
    labels: ["Completed", "Pending", "Upcoming"],
    datasets: [
      {
        data: [12, 2, 3],
        backgroundColor: ["#28a745", "#ffc107", "#17a2b8"],
        hoverOffset: 4,
      },
    ],
  };

  const analyticsData = {
    labels: ["Vamana", "Virechana", "Basti", "Nasya", "Raktamokshana"],
    datasets: [
      {
        label: "Sessions Completed",
        data: [3, 2, 4, 1, 2],
        backgroundColor: "#007bff",
      },
    ],
  };

  const appointments = [
    { date: "10 Sep, 2025", therapy: "Vamana (Detox)" },
    { date: "15 Sep, 2025", therapy: "Virechana (Purgation)" },
    { date: "20 Sep, 2025", therapy: "Basti (Enema)" },
    { date: "25 Sep, 2025", therapy: "Nasya (Nasal Therapy)" },
    { date: "30 Sep, 2025", therapy: "Raktamokshana (Bloodletting)" },
  ];

  // Sample notifications
  const notifications = [
    "⚠️ Reminder: Virechana tomorrow at 10 AM",
    "ℹ️ Pre-procedure fasting for Vamana today",
  ];

  return (
    <section id="patient-dashboard" className="section py-0">
      <div className="container-fluid">
        <div className="row g-0">
          {/* Sidebar */}
          <div
            className="col-lg-2 d-flex flex-column p-3 border-end"
            style={{ backgroundColor: "#393e46", minHeight: "100vh" }}
          >
            <h4 className="mb-4 text-white">Svasthik</h4>

            {/* Notifications */}
            <div
              className="mb-3 p-2"
              style={{
                backgroundColor: "#50555e",
                borderRadius: "8px",
                color: "#fff",
              }}
            >
              <h6 style={{ color: "#ffffff" }}>🔔 Notifications</h6>
              <ul className="list-unstyled small mb-0">
                {notifications.map((note, idx) => (
                  <li key={idx} className="mb-1">
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar Menu */}
            <ul className="list-unstyled mt-3">
              {[
                "📊 Dashboard",
                "📅 Appointments",
                "📈 Analytics",
                "👨‍⚕️ Doctors",
                "📑 Reports",
                "💬 Feedback",
                "❓ Help",
                "💬 AI Chatbot",
              ].map((item, idx) => (
                <li key={idx} className="mb-2">
                  <a
                    href="#"
                    className="w-100 d-block px-3 py-2 rounded-pill text-white sidebar-link"
                    style={{
                      backgroundColor: "#50555e",
                      textDecoration: "none",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                    }}
                    onClick={
                      item === "💬 AI Chatbot"
                        ? (e) => {
                            e.preventDefault();
                            navigate("/chatbot");
                          }
                        : undefined
                    }
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#007bff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#50555e")
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="col-lg-7 p-4">
            <div className="row gy-4">
              {/* Performance Card */}
              <div className="col-md-6">
                <div
                  className="card shadow-sm p-3 text-center"
                  style={{ backgroundColor: "#e7f3ff" }}
                >
                  <h5>Overall Performance</h5>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      margin: "0 auto",
                    }}
                  >
                    <Doughnut
                      data={performanceData}
                      options={{
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: "bottom",
                            labels: { boxWidth: 12 },
                          },
                        },
                      }}
                    />
                  </div>
                  <p className="mt-3">
                    Your Panchakarma sessions are 85% on track.
                  </p>
                </div>
              </div>

              {/* Analytics Card */}
              <div className="col-md-6">
                <div
                  className="card shadow-sm p-3 text-center"
                  style={{ backgroundColor: "#e7f3ff" }}
                >
                  <h5>Therapy Analytics</h5>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      margin: "0 auto",
                    }}
                  >
                    <Bar
                      data={analyticsData}
                      options={{
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false } },
                        scales: {
                          y: { beginAtZero: true, ticks: { stepSize: 1 } },
                          x: { ticks: { display: false } },
                        },
                      }}
                    />
                  </div>
                  <p className="mt-3">
                    Track sessions completed for each therapy.
                  </p>
                </div>
              </div>

              {/* Panchakarma Therapy Tracker */}
              <div className="col-12">
                <div className="card shadow-sm p-3">
                  <h5 className="mb-3">Panchakarma Therapy Schedule</h5>
                  <table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Therapy</th>
                        <th>Doctor Assigned</th>
                        <th>Date</th>
                        <th>Pre-Procedure Notes</th>
                        <th>Status</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appt, idx) => (
                        <tr key={idx}>
                          <td>{appt.therapy}</td>
                          <td>
                            {idx === 0
                              ? "Dr. Anjali Sharma"
                              : idx === 1
                              ? "Dr. Rajesh Verma"
                              : idx === 2
                              ? "Dr. Kavita Nair"
                              : idx === 3
                              ? "Dr. Mohan Iyer"
                              : "Dr. Anjali Sharma"}
                          </td>
                          <td>{appt.date}</td>
                          <td>
                            {idx === 0
                              ? "Fasting required"
                              : idx === 1
                              ? "Avoid spicy food"
                              : idx === 2
                              ? "Light dinner night before"
                              : idx === 3
                              ? "No heavy meals before session"
                              : "Hydrate well before session"}
                          </td>
                          <td>
                            {idx === 0
                              ? "Scheduled"
                              : idx === 1
                              ? "Upcoming"
                              : idx === 2
                              ? "Completed"
                              : idx === 3
                              ? "Pending"
                              : "Critical Follow-up"}
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary">
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-lg-3 p-4 border-start">
            <div
              className="card shadow-sm p-3 text-center"
              style={{ backgroundColor: "#393e46", color: "#eeeeee" }}
            >
              <h5 style={{ color: "#eeeeee" }}>Profile</h5>
              <img
                src="assets/img/profile.png"
                className="img-fluid rounded-circle mb-2 d-block mx-auto"
                alt="profile"
                style={{ width: "100px", height: "100px" }}
              />
              <h6 style={{ color: "#ffffff", fontWeight: "600" }}>John Doe</h6>
              <span style={{ color: "#d6d6d6" }}>32 yrs | Male</span>
              <p style={{ color: "#cccccc" }}>Patient ID: AYU12345</p>
              <p style={{ color: "#cccccc" }}>Ongoing Therapy: Shirodhara</p>
              <p style={{ color: "#cccccc" }}>Last Appointment: 21 Jan, 2025</p>
            </div>

            <div className="card shadow-sm p-3 mt-4">
              <h5>Appointments</h5>
              <p className="small text-muted">
                Your next appointment is on{" "}
                <b>{appointments[0].date}</b> for{" "}
                <b>{appointments[0].therapy}</b>.
              </p>
              <div className="d-flex justify-content-between fw-bold">
                {appointments.map((a, idx) => (
                  <span key={idx} className={idx === 0 ? "text-primary" : ""}>
                    {a.date.split(" ")[0]} {a.date.split(" ")[1]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PatientDashboard;
