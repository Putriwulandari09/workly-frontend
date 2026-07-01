import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import Swal from "sweetalert2";
import AuthLayout from "../../components/AuthLayout";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await api.post("/register", form);

      await Swal.fire({
        icon: "success",
        title: "Registrasi Berhasil",
        text: "Silakan login menggunakan akun Anda.",
      });

      navigate("/login");
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.data);
      }

      Swal.fire({
        icon: "error",
        title: "Registrasi Gagal",
        text: "Silakan periksa kembali data yang Anda masukkan.",
      });
    }
  };

return (
    <AuthLayout
      title="Buat Akun"
      subtitle="Lengkapi data diri untuk membuat akun baru."
    >
    
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label className="form-label">
          Nama Lengkap
          </label>
          <input
            type="text"
            name="name"
            className="form-control auth-input"
            value={form.name}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
          Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control auth-input"
            value={form.email}
            onChange={handleChange}
            placeholder="Masukkan email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
          Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control auth-input"
            value={form.password}
            onChange={handleChange}
            placeholder="Masukkan password"
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">
          Konfirmasi Password
          </label>
          <input
            type="password"
            name="password_confirmation"
            className="form-control auth-input"
            value={form.password_confirmation}
            onChange={handleChange}
            placeholder="Masukkan ulang password"
            required
          />
        </div>

      <button
        type="submit"
        className="btn auth-button w-100"
      >
        Daftar
      </button>

      </form>

      <div className="text-center mt-4">
        Sudah punya akun?
        <Link
          to="/login"
          className="auth-link ms-2"
        >
          Masuk
        </Link>

      </div>

      </AuthLayout>

);
}

export default Register;