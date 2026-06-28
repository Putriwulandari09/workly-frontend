import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jobService from "../../services/jobService";
import JobForm from "../../components/JobForm";

function CreateJob() {
  const navigate = useNavigate();

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
          <JobForm
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            submitLabel="Simpan Lowongan"
          />
        </div>
      </div>
    </>
  );
}

export default CreateJob;