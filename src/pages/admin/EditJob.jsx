import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jobService from "../../services/jobService";
import Swal from "sweetalert2";

function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

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
    loadJob();
  }, [id]);

  const loadJob = async () => {
    try {
      const data = await jobService.getJob(id);

      setForm({
        category_id: data.category_id,
        judul: data.judul,
        perusahaan: data.perusahaan,
        lokasi: data.lokasi,
        tipe_pekerjaan: data.tipe_pekerjaan,
        deskripsi: data.deskripsi,
        persyaratan: data.persyaratan,
        cara_mendaftar: data.cara_mendaftar,
        batas_pendaftaran: data.batas_pendaftaran,
      });
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Gagal mengambil data.",
      });
    } finally {
      setLoading(false);
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
      await jobService.updateJob(id, form);

      await Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Lowongan berhasil diperbarui.",
      });

      navigate("/admin/jobs");
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.data);
      }

      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Gagal memperbarui lowongan.",
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
      <div className="mb-4">
        <h1 className="h3 mb-1">Edit Lowongan</h1>
        <p className="text-muted">
          Perbarui data lowongan pekerjaan.
        </p>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">
                  Judul Pekerjaan
                </label>

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
                <label className="form-label">
                  Perusahaan
                </label>

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
                <label className="form-label">
                  Lokasi
                </label>

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
                <label className="form-label">
                  ID Kategori
                </label>

                <input
                  type="number"
                  name="category_id"
                  value={form.category_id}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">
                  Tipe Pekerjaan
                </label>

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
                <label className="form-label">
                  Deskripsi
                </label>

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
                <label className="form-label">
                  Persyaratan
                </label>

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
                <label className="form-label">
                  Cara Mendaftar
                </label>

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
                <label className="form-label">
                  Batas Pendaftaran
                </label>

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
                Simpan Perubahan
              </button>

              <button
                type="button"
                className="btn btn-secondary"
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

export default EditJob;