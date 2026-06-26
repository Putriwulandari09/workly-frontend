import { Link } from "react-router-dom";

const jobs = [
  { id: 1, title: "Frontend Developer", company: "Workly", location: "Jakarta", status: "Aktif" },
  { id: 2, title: "Backend Developer", company: "TechNova", location: "Bandung", status: "Draft" },
  { id: 3, title: "UI/UX Designer", company: "Kreatif Studio", location: "Surabaya", status: "Aktif" },
];

function JobList() {
  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
        <div>
          <h1 className="h3 mb-1">Daftar Lowongan</h1>
          <p className="text-muted mb-0">Lihat, edit, atau hapus lowongan pekerjaan yang sudah dibuat.</p>
        </div>
        <Link to="/admin/jobs/create" className="btn btn-primary mt-3 mt-md-0">
          Tambah Lowongan
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Judul Pekerjaan</th>
              <th>Perusahaan</th>
              <th>Lokasi</th>
              <th>Status</th>
              <th className="text-end">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job.id}>
                <td>{index + 1}</td>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td>
                  <span className={`badge ${job.status === "Aktif" ? "bg-success" : "bg-secondary"}`}>
                    {job.status}
                  </span>
                </td>
                <td className="text-end">
                  <Link to={`/admin/jobs/edit/${job.id}`} className="btn btn-sm btn-outline-primary me-2">
                    Edit
                  </Link>
                  <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => alert("Hapus lowongan: " + job.title)}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default JobList;
