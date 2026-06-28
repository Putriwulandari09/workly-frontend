import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jobService from "../../services/jobService";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
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
    } finally {
      setLoading(false);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      job.judul.toLowerCase().includes(search.toLowerCase()) ||
      job.perusahaan.toLowerCase().includes(search.toLowerCase()) ||
      job.lokasi.toLowerCase().includes(search.toLowerCase())
    );
  });

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">

      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Workly</h1>
        <p className="text-muted">
          Temukan pekerjaan impianmu di sini.
        </p>
      </div>

      {/* Search */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Cari berdasarkan judul, perusahaan, atau lokasi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Data Lowongan */}
      <div className="row">

        {filteredJobs.length === 0 ? (

          <div className="text-center">
            <h4>Lowongan tidak ditemukan.</h4>
          </div>

        ) : (

          filteredJobs.map((job) => (

            <div
              className="col-lg-4 col-md-6 mb-4"
              key={job.id}
            >

              <div className="card shadow-sm h-100">

                <div className="card-body d-flex flex-column">

                  <h4 className="fw-bold">
                    {job.judul}
                  </h4>

                  <p className="mb-2">
                    <strong>Perusahaan</strong><br />
                    {job.perusahaan}
                  </p>

                  <p className="mb-2">
                    <strong>Lokasi</strong><br />
                    {job.lokasi}
                  </p>

                  <p className="mb-3">
                    <strong>Tipe</strong><br />
                    {job.tipe_pekerjaan}
                  </p>

                  <div className="mt-auto">
                    <Link
                      to={`/job/${job.id}`}
                      className="btn btn-primary w-100"
                    >
                      Lihat Detail
                    </Link>
                  </div>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default Home;