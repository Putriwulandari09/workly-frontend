import { NavLink, Outlet, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Dashboard", to: "/admin/dashboard" },
  { label: "Daftar Lowongan", to: "/admin/jobs" },
  { label: "Tambah Lowongan", to: "/admin/jobs/create" },
];

function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");

    navigate("/login");
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap min-vh-100">
        <aside className="col-auto col-md-3 col-xl-2 px-0 bg-light border-end">
          <div className="d-flex flex-column align-items-start p-3">

            <NavLink
              to="/admin/dashboard"
              className="d-flex align-items-center mb-4 text-decoration-none text-dark"
            >
              <span className="fs-4 fw-bold">
                Workly Admin
              </span>
            </NavLink>

            <hr className="w-100" />

            <nav className="nav nav-pills flex-column w-100">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link text-start ${
                      isActive ? "active" : "text-secondary"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <button
              className="btn btn-danger mt-4 w-100"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>
        </aside>

        <main className="col py-4">
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;