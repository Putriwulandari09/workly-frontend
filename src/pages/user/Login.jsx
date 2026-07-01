import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";
import Swal from "sweetalert2";
import AuthLayout from "../../components/AuthLayout";

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
  <AuthLayout
    title="Masuk"
    subtitle="Silakan masuk untuk melanjutkan ke Workly."
  >

    <form onSubmit={handleLogin}>

      <div className="mb-3">

        <label className="form-label">
          Email
        </label>

        <input
          type="email"
          className="form-control auth-input"
          placeholder="Masukkan email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

      </div>

      <div className="mb-4">

        <label className="form-label">
          Password
        </label>

        <input
          type="password"
          className="form-control auth-input"
          placeholder="Masukkan password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

      </div>

      <button
        className="btn auth-button w-100"
        type="submit"
      >
        Masuk
      </button>

    </form>

    <div className="text-center mt-4">

      Belum punya akun?

      <Link
        to="/register"
        className="auth-link ms-2"
      >
        Daftar
      </Link>

    </div>

  </AuthLayout>
);
}
export default Login;