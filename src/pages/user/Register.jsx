import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import Swal from "sweetalert2";

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
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow">

            <div className="card-body">

              <h2 className="mb-4 text-center">
                Register Workly
              </h2>

              <form onSubmit={handleRegister}>

                <div className="mb-3">
                  <label>Nama</label>

                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>

                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label>Konfirmasi Password</label>

                  <input
                    type="password"
                    name="password_confirmation"
                    className="form-control"
                    value={form.password_confirmation}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Daftar
                </button>

              </form>

              <div className="text-center mt-3">

                Sudah punya akun?

                <Link
                  to="/login"
                  className="ms-2"
                >
                  Login
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;