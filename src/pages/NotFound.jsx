import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">

      <div className="text-center">

        <h1
          className="display-1 fw-bold text-primary"
        >
          404
        </h1>

        <h3>Halaman Tidak Ditemukan</h3>

        <p className="text-muted mb-4">
          Halaman yang Anda cari tidak tersedia.
        </p>

        <Link
          to="/"
          className="btn btn-primary"
        >
          Kembali ke Login
        </Link>

      </div>

    </div>
  );
}

export default NotFound;