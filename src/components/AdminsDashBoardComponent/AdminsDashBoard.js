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

function AdminDashboard() {
  const therapyDistribution = {
    labels: ["Vamana", "Virechana", "Basti", "Nasya", "Raktamokshana"],
    datasets: [
      {
        data: [12, 8, 15, 6, 10],
        backgroundColor: ["#28a745", "#ffc107", "#17a2b8", "#dc3545", "#6f42c1"],
        hoverOffset: 4,
      },
    ],
  };

  const appointmentsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Appointments",
        data: [5, 7, 6, 4, 8, 3],
        backgroundColor: "#007bff",
      },
    ],
  };

  const recentAppointments = [
    { date: "10 Sep, 2025", patient: "John Doe", doctor: "Dr. Anjali Sharma", therapy: "Vamana" },
    { date: "12 Sep, 2025", patient: "Priya Sharma", doctor: "Dr. Rajesh Verma", therapy: "Virechana" },
    { date: "15 Sep, 2025", patient: "Ravi Kumar", doctor: "Dr. Kavita Nair", therapy: "Basti" },
    { date: "18 Sep, 2025", patient: "Anita Joshi", doctor: "Dr. Mohan Iyer", therapy: "Nasya" },
  ];

  return (
    <section id="admin-dashboard" className="section py-0">
      <div className="container-fluid">
        <div className="row g-0">

          {/* Sidebar */}
          <div
            className="col-lg-2 d-flex flex-column p-3 border-end"
            style={{ backgroundColor: "#393e46", minHeight: "100vh" }}
          >
            <h4 className="mb-4 text-white">Svasthik Admin</h4>
            <ul className="list-unstyled">
              {[
                "📊 Dashboard",
                "👨‍⚕️ Doctors",
                "👥 Patients",
                "📅 Appointments",
                "📑 Reports",
                "⚙️ Settings",
                "💬 AI Chatbot",
              ].map((item, idx) => (
                <li key={idx} className="mb-2">
                  <a
                    href="#"
                    className="w-100 d-block px-3 py-2 rounded-pill text-white"
                    style={{
                      backgroundColor: "#50555e",
                      textDecoration: "none",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#50555e")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="col-lg-10 p-4">
            <div className="row gy-4">
              {/* Overview Cards */}
              {[
                { title: "Total Doctors", value: 12 },
                { title: "Total Patients", value: 85 },
                { title: "Appointments", value: 56 },
                { title: "Active Sessions", value: 34 },
              ].map((card, idx) => (
                <div className="col-md-3" key={idx}>
                  <div className="card shadow-sm p-3 text-center" style={{ backgroundColor: "#e7f3ff" }}>
                    <h6>{card.title}</h6>
                    <h2>{card.value}</h2>
                  </div>
                </div>
              ))}

              {/* Charts */}
              <div className="col-md-6">
                <div className="card shadow-sm p-3 text-center" style={{ backgroundColor: "#e7f3ff" }}>
                  <h5>Therapy Distribution</h5>
                  <div style={{ width: "200px", height: "200px", margin: "0 auto" }}>
                    <Doughnut
                      data={therapyDistribution}
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
                  <h5>Appointments per Day</h5>
                  <div style={{ width: "200px", height: "200px", margin: "0 auto" }}>
                    <Bar
                      data={appointmentsData}
                      options={{
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false } },
                        scales: {
                          y: { beginAtZero: true, stepSize: 1 },
                          x: { ticks: { display: true } },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Recent Appointments Table */}
              <div className="col-12">
                <div className="card shadow-sm p-3">
                  <h5 className="mb-3">Recent Appointments</h5>
                  <table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Patient</th>
                        <th>Doctor</th>
                        <th>Therapy</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentAppointments.map((app, idx) => (
                        <tr key={idx}>
                          <td>{app.patient}</td>
                          <td>{app.doctor}</td>
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

        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
