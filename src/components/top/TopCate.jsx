import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TopCart from "./TopCart";
import "./TopCate.css";

export default function TopCate() {
  return (
    <>
      <section className="topCat background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <FontAwesomeIcon icon={faBorderAll} className="icon-border" />
              <h2>Kategori Teratas</h2>
            </div>
            <div className="heading-right row">
              <span>
                <Link to="/top-kategori">Lihat Semua</Link>
              </span>
              <FontAwesomeIcon icon={faCaretRight} className="icon-caret" />
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  );
}
