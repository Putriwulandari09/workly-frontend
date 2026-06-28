import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jobService from "../../services/jobService";
import categoryService from "../../services/categoryService";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const jobData = await jobService.getJobs();
      const categoryData = await categoryService.getCategories();

      setJobs(jobData);
      setCategories(categoryData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const cocokJudul = job.judul
      .toLowerCase()
      .includes(search.toLowerCase());

    const cocokKategori =
      category === "" || job.category_id === Number(category);

    const cocokTipe =
      type === "" || job.tipe_pekerjaan === type;

    return cocokJudul && cocokKategori && cocokTipe;
  });

  if (loading) {
    return (
      <div className="container py-5">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <h1 className="text-center mb-2">
        Workly
      </h1>

      <p className="text-center text-muted mb-5">
        Temukan pekerjaan impianmu
      </p>

      <div className="row mb-4">

        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Cari pekerjaan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Semua Kategori</option>

            {categories.map((cat) => (
              <option
                key={cat.id}
                value={cat.id}
              >
                {cat.name}
              </option>
            ))}

          </select>
        </div>

        <div className="col-md-4">

          <select
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Semua Tipe</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
            <option>Freelance</option>
          </select>

        </div>

      </div>

      <div className="row">

        {filteredJobs.length === 0 ? (

          <div className="text-center">

            <h4>
              Lowongan tidak ditemukan.
            </h4>

          </div>

        ) : (

          filteredJobs.map((job) => (

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
                    <strong>Kategori</strong><br />
                    {job.category?.name}
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