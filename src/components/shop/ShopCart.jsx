import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default function ShopCart({ shopItems, addToCart }) {
  return (
    <>
      {shopItems.map((product) => {
        return (
          <div className="box" key={product.id}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">Diskon {product.discount}%</span>
                <img
                  src={product.cover}
                  alt=""
                  width={250}
                  className="img-flashdeals"
                />
                <div className="product-like">
                  <FontAwesomeIcon icon={faHeart} className="icon-heart" />
                </div>
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <div className="rate">
                  <FontAwesomeIcon icon={faStar} className="icon-star" />
                  <FontAwesomeIcon icon={faStar} className="icon-star" />
                  <FontAwesomeIcon icon={faStar} className="icon-star" />
                  <FontAwesomeIcon icon={faStar} className="icon-star" />
                  <FontAwesomeIcon icon={faStar} className="icon-star" />
                </div>
              </div>
              <div className="price">
                <h4>
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </h4>
                <div className="button">
                  <button
                    className="btn-cart"
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </button>
                  <button className="btn-3d">AR</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

ShopCart.propTypes = {
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
