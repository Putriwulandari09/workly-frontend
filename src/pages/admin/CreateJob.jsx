import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateJob() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    salary: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Lowongan ${form.title} berhasil ditambahkan.`);
    navigate("/admin/jobs");
  };

  return (
    <>
      <div className="mb-4">
        <h1 className="h3 mb-1">Tambah Lowongan</h1>
        <p className="text-muted mb-0">Buat lowongan baru untuk ditampilkan di daftar admin.</p>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="form-label">Judul Pekerjaan</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Perusahaan</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Lokasi</label>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Kategori</label>
                <input
                  type="text"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Gaji</label>
                <input
                  type="text"
                  name="salary"
                  value={form.salary}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-12">
                <label className="form-label">Deskripsi</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows="5"
                  className="form-control"
                />
              </div>
            </div>

            <div className="mt-4 d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Simpan Lowongan
              </button>
              <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/admin/jobs")}>Batal</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateJob;
