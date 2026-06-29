import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

function Dashboard() {
  const [dashboard, setDashboard] = useState({
    total_jobs: 0,
    total_categories: 0,
    total_users: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const response = await api.get("/dashboard");

      setDashboard(response.data);
    } catch (error) {
      console.error("Gagal mengambil data dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return 
    <div className="d-flex justify-content-center py-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  }

  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">

        <div>
          <h1 className="h3 mb-1">
            Dashboard Admin
          </h1>

          <p className="text-muted mb-0">
            Kelola lowongan pekerjaan Workly.
          </p>
        </div>

        <Link
          to="/admin/jobs/create"
          className="btn btn-primary mt-3 mt-md-0"
        >
          Tambah Lowongan
        </Link>

      </div>

      <div className="row g-4">

        <div className="col-md-4">

          <div className="card shadow-sm border-0">

            <div className="card-body text-center">

              <h6 className="text-muted">
                Total Lowongan
              </h6>

              <h1 className="display-4 fw-bold text-primary">
                {dashboard.total_jobs}
              </h1>

            </div>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow-sm border-0">

            <div className="card-body text-center">

              <h6 className="text-muted">
                Total Kategori
              </h6>

              <h1 className="display-4 fw-bold text-success">
                {dashboard.total_categories}
              </h1>

            </div>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow-sm border-0">

            <div className="card-body text-center">

              <h6 className="text-muted">
                Total User
              </h6>

              <h1 className="display-4 fw-bold text-danger">
                {dashboard.total_users}
              </h1>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;