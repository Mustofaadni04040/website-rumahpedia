import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Dcard from "./Dcard";

export default function Discount() {
  return (
    <>
      <section className="discount background newarrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <img src="https://img.icons8.com/windows/32/fa314a/gift.png" />
              <h2>Diskon Besar</h2>
            </div>
            <div className="heading-right row">
              <span>
                <Link to="/big-discount">Lihat Semua</Link>
              </span>
              <FontAwesomeIcon icon={faCaretRight} className="icon-caret" />
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  );
}
