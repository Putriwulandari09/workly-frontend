import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      const token = response.data.access_token;
      const role = response.data.role;
      const user = response.data.user;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("user", JSON.stringify(user));

      await Swal.fire({
        icon: "success",
        title: "Login Berhasil",
        text: "Selamat datang di Workly.",
        timer: 1500,
        showConfirmButton: false,
      });
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/home");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: "Email atau Password salah.",
      });
      console.error(error);
    }
  };

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

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control custom-input"
              placeholder="contoh@workly.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control custom-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

                  <button
          type="submit"
          className="btn login-btn"
        >
          Masuk Sekarang
        </button>
        </form>

        <div className="register-section">
          <div className="line"></div>
          <span>Belum punya akun?</span>
          <div className="line"></div>
        </div>

        <Link
          to="/register"
          className="register-link"
        >
          Daftar Gratis
        </Link>
      </div>
    </div>
  );
}

export default Login;