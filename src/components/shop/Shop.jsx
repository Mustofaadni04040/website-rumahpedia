import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Cate from "./Cate";
import ShopCart from "./ShopCart";
import PropTypes from "prop-types";
import "./Shop.css";

export default function Shop({ shopItems, addToCart }) {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <Cate />
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row f_flex">
                <h2>Produk Paling Dicari</h2>
              </div>
              <div className="heading-right row">
                <span>
                  <Link to="/new-produk">Lihat Semua</Link>
                </span>
                <FontAwesomeIcon icon={faCaretRight} className="icon-caret" />
              </div>
            </div>

            <div className="product-content grid1">
              <ShopCart shopItems={shopItems} addToCart={addToCart} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
Shop.propTypes = {
  addToCart: PropTypes.func,
  shopItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cover: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discount: PropTypes.string.isRequired,
    })
  ),
};
