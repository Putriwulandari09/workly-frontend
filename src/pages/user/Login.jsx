import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">

      <div className="navbar-brand-custom">
        Workly
      </div>

      <div className="login-card">

        <h1 className="login-title">
          Selamat Datang
        </h1>

        <p className="login-subtitle">
          Masuk ke akun Workly untuk melanjutkan karir Anda.
        </p>

        <div className="mb-4">
          <label className="form-label">
            Email
          </label>

          <input
            type="email"
            className="form-control custom-input"
            placeholder="contoh@workly.com"
          />
        </div>

        <div className="mb-4">

          <div className="password-header">
            <label className="form-label">
              Password
            </label>

            <a href="#" className="forgot-link">
              Lupa Sandi?
            </a>
          </div>

          <input
            type="password"
            className="form-control custom-input"
            placeholder="••••••••"
          />
        </div>

        <button className="btn login-btn">
          Masuk Sekarang
        </button>

        <div className="register-section">

          <div className="line"></div>

          <span>
            Belum punya akun?
          </span>

          <div className="line"></div>

        </div>

        <Link
          to="/register"
          className="register-link"
        >
          Daftar Gratis
        </Link>

      </div>

      <footer className="footer">

        <p>
          © 2024 Workly Job Platform. All rights reserved.
        </p>

        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>

      </footer>

    </div>
  );
}

export default Login;