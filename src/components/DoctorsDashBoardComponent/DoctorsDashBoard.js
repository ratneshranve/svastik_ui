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

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function DoctorsDashboard() {
  const sessionData = {
    labels: ["Completed", "Pending", "Upcoming"],
    datasets: [
      {
        data: [15, 5, 3],
        backgroundColor: ["#28a745", "#ffc107", "#17a2b8"],
        hoverOffset: 4,
      },
    ],
  };

  const therapyAnalytics = {
    labels: ["Vamana", "Virechana", "Basti", "Nasya", "Raktamokshana"],
    datasets: [
      {
        label: "Patients",
        data: [5, 3, 6, 2, 4],
        backgroundColor: "#007bff",
      },
    ],
  };

  const appointments = [
    { date: "10 Sep, 2025", patient: "John Doe", therapy: "Vamana" },
    { date: "12 Sep, 2025", patient: "Priya Sharma", therapy: "Virechana" },
    { date: "15 Sep, 2025", patient: "Ravi Kumar", therapy: "Basti" },
    { date: "18 Sep, 2025", patient: "Anita Joshi", therapy: "Nasya" },
    { date: "20 Sep, 2025", patient: "Suresh Patel", therapy: "Raktamokshana" },
  ];

  // Example notifications
  const notifications = [
    "Next appointment with John Doe on 10 Sep, 2025",
    "Patient Priya Sharma requires pre-procedure preparation",
    "New therapy schedule updated for Nasya",
  ];

  return (
    <section id="doctor-dashboard" className="section py-0">
      <div className="container-fluid">
        <div className="row g-0">

          {/* Sidebar */}
          <div
            className="col-lg-2 d-flex flex-column p-3 border-end"
            style={{ backgroundColor: "#393e46", minHeight: "100vh" }}
          >
            <h4 className="mb-4 text-white">Svasthik</h4>

            {/* Notifications */}
            <div className="mb-3 p-2" style={{ backgroundColor: "#50555e", borderRadius: "8px", color: "#fff" }}>
             <h6 style={{ color: "#ffffff" }}>🔔 Notifications</h6>
              <ul className="list-unstyled small mb-0">
                {notifications.map((note, idx) => (
                  <li key={idx} className="mb-1">
                    • {note}
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
                "👥 Patients",
                "📑 Reports",
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
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Inner CSS for hover */}
            <style>
              {`
                .sidebar-link:hover {
                  background-color: #6c757d;
                  transition: 0.3s;
                }
              `}
            </style>
          </div>

          {/* Main Content */}
          <div className="col-lg-7 p-4">
            <div className="row gy-4">
              {/* Overview Cards */}
              <div className="col-md-4">
                <div className="card shadow-sm p-3 text-center" style={{ backgroundColor: "#e7f3ff" }}>
                  <h5>Total Patients</h5>
                  <h2>24</h2>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm p-3 text-center" style={{ backgroundColor: "#e7f3ff" }}>
                  <h5>Upcoming Appointments</h5>
                  <h2>5</h2>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm p-3 text-center" style={{ backgroundColor: "#e7f3ff" }}>
                  <h5>Sessions Completed</h5>
                  <h2>15</h2>
                </div>
              </div>

              {/* Charts */}
              <div className="col-md-6">
                <div className="card shadow-sm p-3 text-center" style={{ backgroundColor: "#e7f3ff" }}>
                  <h5>Session Status</h5>
                  <div style={{ width: "200px", height: "200px", margin: "0 auto" }}>
                    <Doughnut
                      data={sessionData}
                      options={{
                        maintainAspectRatio: false,
                        plugins: { legend: { position: "bottom", labels: { boxWidth: 12 } } },
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card shadow-sm p-3 text-center" style={{ backgroundColor: "#e7f3ff" }}>
                  <h5>Patients per Therapy</h5>
                  <div style={{ width: "200px", height: "200px", margin: "0 auto" }}>
                    <Bar
                      data={therapyAnalytics}
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
                </div>
              </div>

              {/* Appointments Table */}
              <div className="col-12">
                <div className="card shadow-sm p-3">
                  <h5 className="mb-3">Upcoming Appointments</h5>
                  <table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Patient</th>
                        <th>Therapy</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((app, idx) => (
                        <tr key={idx}>
                          <td>{app.patient}</td>
                          <td>{app.therapy}</td>
                          <td>{app.date}</td>
                          <td>
                            <span className={`badge ${idx % 2 === 0 ? "bg-success" : "bg-warning"}`}>
                              {idx % 2 === 0 ? "Completed" : "Scheduled"}
                            </span>
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
            <div className="card shadow-sm p-3 text-center" style={{ backgroundColor: "#393e46", color: "#eeeeee" }}>
              <h5 style={{ color: "#eeeeee" }}>Profile</h5>
              <img
                src="assets/img/trisha.jpg"
                className="img-fluid rounded-circle mb-2 d-block mx-auto"
                alt="profile"
                style={{ width: "100px", height: "100px" }}
              />
              <h6 style={{ color: "#ffffff", fontWeight: "600" }}>Dr. Trisha Mishra</h6>
              <span style={{ color: "#d6d6d6" }}>Ayurveda Specialist</span>
              <p style={{ color: "#cccccc" }}>ID: DOC9876</p>
              <p style={{ color: "#cccccc" }}>Experience: 12 yrs</p>
              <p style={{ color: "#cccccc" }}>Next Appointment: 10 Sep, 2025</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DoctorsDashboard;
