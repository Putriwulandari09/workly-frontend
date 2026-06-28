import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import jobService from "../../services/jobService";
import UserNavbar from "../../components/UserNavbar";

function DetailJob() {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadJob();
  }, [id]);

  const loadJob = async () => {
    try {
      const data = await jobService.getJob(id);
      setJob(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container py-5">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="container py-5">
        <h3>Lowongan tidak ditemukan.</h3>
      </div>
    );
  }

  return (
  <>
    <UserNavbar />
    <div className="container py-5">

      <Link
        to="/home"
        className="btn btn-secondary mb-4"
      >
        ← Kembali
      </Link>

      <div className="card shadow">

        <div className="card-body">

          <h2>{job.judul}</h2>

          <hr />

          <p>
            <strong>Perusahaan :</strong><br />
            {job.perusahaan}
          </p>

          <p>
            <strong>Lokasi :</strong><br />
            {job.lokasi}
          </p>

          <p>
            <strong>Tipe Pekerjaan :</strong><br />
            {job.tipe_pekerjaan}
          </p>

          <p>
            <strong>Deskripsi :</strong><br />
            {job.deskripsi}
          </p>

          <p>
            <strong>Persyaratan :</strong><br />
            {job.persyaratan}
          </p>

          <p>
            <strong>Cara Mendaftar :</strong><br />
            {job.cara_mendaftar}
          </p>

          <p>
            <strong>Batas Pendaftaran :</strong><br />
            {job.batas_pendaftaran}
          </p>

        </div>

      </div>

    </div>
  </>
  );
}

export default DetailJob;