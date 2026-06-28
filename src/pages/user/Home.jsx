import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jobService from "../../services/jobService";

function Home() {
  const [jobs, setJobs] =useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const data = await jobService.getJobs();
      setJobs(data);
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

  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1>Workly</h1>
        <p className="text-muted">
          Temukan pekerjaan impianmu
        </p>
      </div>

      <div className="row">

        {jobs.length === 0 ? (

          <div className="text-center">
            <h4>Belum ada lowongan.</h4>
          </div>

        ) : (

          jobs.map((job) => (

            <div
              className="col-md-4 mb-4"
              key={job.id}
            >

              <div className="card shadow-sm h-100">

                <div className="card-body">

                  <h4>{job.judul}</h4>

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

                  <Link
                    to={`/job/${job.id}`}
                    className="btn btn-primary w-100"
                  >
                    Lihat Detail
                  </Link>

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