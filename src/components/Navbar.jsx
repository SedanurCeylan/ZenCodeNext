'use client';
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

function Navbar() {
  const [status, setStatus] = useState(null);
  const [name, setName] = useState(null);
  const t = useTranslations()
  const locale = useLocale()

  useEffect(() => {
    const userStatus = localStorage.getItem("status");
    const userName = localStorage.getItem("name");
    setStatus(userStatus);
    setName(userName);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-black fixed-top py-3 border-bottom border-opacity-10 border-white">
      <div className="container">
        <a className="navbar-brand text-white" href="#">
          ZenCode
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <a className="nav-link active text-white" aria-current="page" href="/">
                {t("home")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/position">
                Açık Pozisyonlar
              </a>
            </li>
          </ul>
          {status ? (
            <div className="dropdown">
              <button
                className="dropdown-toggle profile-badge text-white "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              
              >
                {name}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Profilim
                  </a>
                </li>
                {status === "admin" && (
                  <>
                    <li>
                      <a className="dropdown-item" href="/uploadjobform/new">
                        Açık Pozisyonları Yönet
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/applications">
                        Başvuruları Yönet
                      </a>
                    </li>
                  </>
                )}
                <li>
                  <a
                    className="dropdown-item"
                    href="/login"
                    onClick={() => {
                      localStorage.removeItem("status");
                      setStatus(null);
                    }}
                  >
                    Çıkış Yap
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <a className="btn btn-primary" href={`/${locale}/login`}>
              Giriş Yap
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
