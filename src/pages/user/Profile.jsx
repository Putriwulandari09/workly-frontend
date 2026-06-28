import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../../components/UserNavbar";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));

    if (!data) {
      navigate("/login");
      return;
    }

    setUser(data);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");

    navigate("/login");
  };

  if (!user) {
    return (
      <div className="container py-5">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
  <>
    <UserNavbar />
    <div className="container py-5">

      <div className="card shadow">

        <div className="card-body">

          <h2 className="mb-4">
            Profil Pengguna
          </h2>

          <hr />

          <p>
            <strong>Nama</strong>
            <br />
            {user.name}
          </p>

          <p>
            <strong>Email</strong>
            <br />
            {user.email}
          </p>

          <p>
            <strong>Role</strong>
            <br />
            {user.role}
          </p>

          <button
            className="btn btn-danger mt-3"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  </>
  );
}

export default Profile;