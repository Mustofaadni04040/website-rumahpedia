import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PropTypes from "prop-types";

export const Search = ({ cartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <h1>
              RUMAH<span className="mark">PEDIA.</span>
            </h1>
          </div>
          <div className="search-box f_flex">
            <FontAwesomeIcon icon={faSearch} className="icon-search" />
            <input type="text" placeholder="Cari Keperluan Rumah Tangga" />
            <span>Semua Kategory</span>
          </div>

          <div className="icon f_flex width">
            <div className="user">
              <FontAwesomeIcon
                icon={faUser}
                className="icon-circle"
                style={{ color: "#0f3460" }}
              />
            </div>
            <div className="cart">
              <Link to="/keranjang">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="icon-circle"
                  style={{ color: "#0f3460" }}
                />
                <span>{cartItem.length === 0 ? "0" : cartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Search.propTypes = {
  cartItem: PropTypes.array,
};
