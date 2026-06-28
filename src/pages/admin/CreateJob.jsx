import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jobService from "../../services/jobService";
import categoryService from "../../services/categoryService";

function CreateJob() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({
    category_id: "",
    judul: "",
    perusahaan: "",
    lokasi: "",
    tipe_pekerjaan: "",
    deskripsi: "",
    persyaratan: "",
    cara_mendaftar: "",
    batas_pendaftaran: "",
  });

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const data = await categoryService.getCategories();
      setCategories(data);
    } catch (error) {
      console.error("Gagal mengambil kategori:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await jobService.createJob(form);

      alert("Lowongan berhasil ditambahkan.");

      navigate("/admin/jobs");
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.log(error.response.data);
      }

      alert("Gagal menambahkan lowongan.");
    }
  };

  return (
    <>
      <div className="mb-4">
        <h1 className="h3 mb-1">Tambah Lowongan</h1>

        <p className="text-muted mb-0">
          Buat lowongan baru untuk ditampilkan di daftar admin.
        </p>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">Judul Pekerjaan</label>
                <input
                  type="text"
                  name="judul"
                  value={form.judul}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Perusahaan</label>
                <input
                  type="text"
                  name="perusahaan"
                  value={form.perusahaan}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Lokasi</label>
                <input
                  type="text"
                  name="lokasi"
                  value={form.lokasi}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Kategori</label>

                <select
                  name="category_id"
                  value={form.category_id}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Pilih Kategori</option>

                  {categories.map((category) => (
                    <option
                      key={category.id}
                      value={category.id}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Tipe Pekerjaan</label>

                <select
                  name="tipe_pekerjaan"
                  value={form.tipe_pekerjaan}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Pilih</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Deskripsi</label>

                <textarea
                  name="deskripsi"
                  value={form.deskripsi}
                  onChange={handleChange}
                  rows="5"
                  className="form-control"
                  required
                />
              </div>

              <div className="col-12">
                <label className="form-label">Persyaratan</label>

                <textarea
                  name="persyaratan"
                  value={form.persyaratan}
                  onChange={handleChange}
                  rows="5"
                  className="form-control"
                  required
                />
              </div>

              <div className="col-12">
                <label className="form-label">Cara Mendaftar</label>

                <textarea
                  name="cara_mendaftar"
                  value={form.cara_mendaftar}
                  onChange={handleChange}
                  rows="5"
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Batas Pendaftaran</label>

                <input
                  type="date"
                  name="batas_pendaftaran"
                  value={form.batas_pendaftaran}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

            </div>

            <div className="mt-4 d-flex gap-2">
              <button
                type="submit"
                className="btn btn-primary"
              >
                Simpan Lowongan
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => navigate("/admin/jobs")}
              >
                Batal
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default CreateJob;