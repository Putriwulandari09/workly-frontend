import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
        <div>
          <h1 className="h3 mb-1">Dashboard Admin</h1>
          <p className="text-muted mb-0">Kelola lowongan pekerjaan dan pantau data admin secara cepat.</p>
        </div>
        <Link to="/admin/jobs/create" className="btn btn-primary mt-3 mt-md-0">
          Tambah Lowongan
        </Link>
      </div>

      <div className="row g-3">
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6 className="card-title text-uppercase text-muted mb-3">Total Lowongan</h6>
              <p className="display-6 fw-bold mb-0">12</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6 className="card-title text-uppercase text-muted mb-3">Lowongan Aktif</h6>
              <p className="display-6 fw-bold mb-0">9</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6 className="card-title text-uppercase text-muted mb-3">Perusahaan Teratas</h6>
              <p className="display-6 fw-bold mb-0">4</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6 className="card-title text-uppercase text-muted mb-3">Aksi Terbaru</h6>
              <p className="display-6 fw-bold mb-0">5</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
