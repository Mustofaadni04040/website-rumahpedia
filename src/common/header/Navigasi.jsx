import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faChevronDown,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const NavBar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          {location.pathname === "/" ? (
            <div className="categories d_flex">
              <FontAwesomeIcon icon={faBorderAll} className="icon-border" />
              <h4>
                Kategori{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="icon-chevron"
                />
              </h4>
            </div>
          ) : (
            ""
          )}
          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">Beranda</Link>
              </li>
              <li>
                <Link to="/pengguna">Pengaturan Akun</Link>
              </li>
              <li>
                <Link to="/track">Cek Orderan Saya</Link>
              </li>
              <li>
                <Link to="/contact">Kontak Kami</Link>
              </li>
            </ul>
            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <FontAwesomeIcon icon={faTimes} className="close home-bth" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="open" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
