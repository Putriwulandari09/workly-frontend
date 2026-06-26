import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jobService from "../../services/jobService";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const data = await jobService.getJobs();
      setJobs(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="container mt-4">
      <h2>Daftar Lowongan</h2>

      <div className="row">
        {jobs.map((job) => (
          <div className="col-md-4 mb-3" key={job.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5>{job.judul}</h5>

                <p>
                  <strong>Perusahaan:</strong>
                  {" "}
                  {job.perusahaan}
                </p>

                <p>
                  <strong>Lokasi:</strong>
                  {" "}
                  {job.lokasi}
                </p>

                <Link
                  to={`/job/${job.id}`}
                  className="btn btn-primary"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;