import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jobService from "../../services/jobService";
import Swal from "sweetalert2";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  loadJobs();
}, []);

const loadJobs = async () => {
  try {
    const data = await jobService.getJobs();
    setJobs(data);
  } catch (error) {
    console.error("Gagal mengambil data:", error);

    if (error.response) {
      console.error(error.response.data);
    }
  } finally {
    setLoading(false);
  }
};

const handleDelete = async (id) => {
  const result = await Swal.fire({
    title: "Hapus Lowongan?",
    text: "Data yang dihapus tidak dapat dikembalikan.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya, Hapus",
    cancelButtonText: "Batal",
  });

  if (!result.isConfirmed) return;

  try {
    await jobService.deleteJob(id);

    await Swal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Lowongan berhasil dihapus.",
      timer: 1500,
      showConfirmButton: false,
    });

    loadJobs();
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.data);
    }

    Swal.fire({
      icon: "error",
      title: "Gagal",
      text: "Lowongan gagal dihapus.",
    });
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
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h3">Daftar Lowongan</h1>
          <p className="text-muted">
            Kelola seluruh data lowongan pekerjaan.
          </p>
        </div>

        <Link
          to="/admin/jobs/create"
          className="btn btn-primary"
        >
          Tambah Lowongan
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Perusahaan</th>
              <th>Lokasi</th>
              <th>Tipe</th>
              <th width="170">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {jobs.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">
                  Belum ada data
                </td>
              </tr>
            ) : (
              jobs.map((job, index) => (
                <tr key={job.id}>
                  <td>{index + 1}</td>
                  <td>{job.judul}</td>
                  <td>{job.perusahaan}</td>
                  <td>{job.lokasi}</td>
                  <td>{job.tipe_pekerjaan}</td>
                  <td>
                    <Link
                      to={`/admin/jobs/edit/${job.id}`}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Edit
                    </Link>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(job.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default JobList;