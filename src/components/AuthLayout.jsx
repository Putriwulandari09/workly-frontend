import "./AuthLayout.css";
import worklyImage from "../assets/workly-login.png";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="auth-container">

      {/* LEFT */}

      <div className="auth-left">

        <div className="overlay"></div>

        <div className="left-content">

          <div className="logo-box">

            <div className="logo-circle">
              W
            </div>

            <h2>Workly</h2>

          </div>

          <img
            src={worklyImage}
            alt="Workly"
            className="auth-image"
          />

          <h1>
            Cari Kerja
            <br />
            Lebih Mudah
          </h1>

          <p>
            Temukan pekerjaan impianmu bersama
            Workly dengan ribuan lowongan
            terpercaya.
          </p>

        </div>

      </div>

      {/* RIGHT */}

      <div className="auth-right">

        <div className="auth-card">

          <h2>{title}</h2>

          <p className="auth-subtitle">
            {subtitle}
          </p>

          {children}

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;