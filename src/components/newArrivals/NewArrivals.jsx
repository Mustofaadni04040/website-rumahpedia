import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Cart from "./NCart";
import "./New.css";

export default function NewArrivals() {
  return (
    <>
      <section className="newarrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" />
              <h2>Produk Terbaru</h2>
            </div>
            <div className="heading-right row">
              <span>
                <Link to="/new-produk">Lihat Semua</Link>
              </span>
              <FontAwesomeIcon icon={faCaretRight} className="icon-caret" />
            </div>
          </div>
          <Cart />
        </div>
      </section>
    </>
  );
}
