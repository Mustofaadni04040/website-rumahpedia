import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faShoppingCart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Slider from "react-slick";

const NextArrow = ({ onClick }) => {
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <FontAwesomeIcon icon={faLongArrowAltRight} />
      </button>
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </button>
    </div>
  );
};
NextArrow.propTypes = {
  onClick: PropTypes.func,
};
PrevArrow.propTypes = {
  onClick: PropTypes.func,
};

export default function FlashCard({ productItems, addToCart, onToggleModal }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  if (window.innerWidth <= 576) {
    settings.slidesToShow = 3;
  } else {
    settings.slidesToShow = 4;
  }
  return (
    <>
      <Slider {...settings}>
        {productItems.map((product) => {
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
                    <button className="btn-3d" onClick={onToggleModal}>
                      AR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
FlashCard.propTypes = {
  productItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      discount: PropTypes.number.isRequired,
      cover: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
  addToCart: PropTypes.func,
  onToggleModal: PropTypes.func,
};
