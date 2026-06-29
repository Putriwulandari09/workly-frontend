import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jobService from "../../services/jobService";
import categoryService from "../../services/categoryService";
import UserNavbar from "../../components/UserNavbar";

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
      console.error("Gagal mengambil data:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchSearch =
      job.judul.toLowerCase().includes(search.toLowerCase()) ||
      job.perusahaan.toLowerCase().includes(search.toLowerCase()) ||
      job.lokasi.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "" || job.category_id === Number(category);

    const matchType =
      type === "" || job.tipe_pekerjaan === type;

    return matchSearch && matchCategory && matchType;
  });

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="d-flex justify-content-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
  <>
    <UserNavbar />
    <div className="container py-5">

      {/* Tombol Profile */}
      <div className="d-flex justify-content-end mb-3">
        <Link
          to="/profile"
          className="btn btn-outline-primary"
        >
          Profil Saya
        </Link>
      </div>

      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Workly</h1>
        <p className="text-muted">
          Temukan pekerjaan impianmu
        </p>
      </div>

      {/* Search & Filter */}
      <div className="row mb-4">

        <div className="col-md-4 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Cari pekerjaan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4 mb-3">
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

        <div className="col-md-4 mb-3">
          <select
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Semua Tipe</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>

      </div>

      {/* Daftar Lowongan */}
      <div className="row">

        {filteredJobs.length === 0 ? (

          <div className="text-center">
            <h4>Tidak ada lowongan yang sesuai.</h4>
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
                    <strong>Kategori</strong><br />
                    {job.category?.name}
                  </p>

                  <p className="mb-2">
                    <strong>Lokasi</strong><br />
                    {job.lokasi}
                  </p>

                  <p className="mb-3">
                    <strong>Tipe Pekerjaan</strong><br />
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
  </>
  );
}

export default Home;