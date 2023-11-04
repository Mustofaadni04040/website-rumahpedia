import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import FlashCard from "./FlashCard";
import PropTypes from "prop-types";

export default function FlashDeals({ productItems, addToCart, onToggleModal }) {
  return (
    <>
      <section className="flash background">
        <div className="container">
          <div className="heading f_flex">
            <FontAwesomeIcon icon={faBolt} className="icon-bolt" />
            <h1>Flash Deals</h1>
          </div>
          <FlashCard
            productItems={productItems}
            addToCart={addToCart}
            onToggleModal={onToggleModal}
          />
        </div>
      </section>
    </>
  );
}

FlashDeals.propTypes = {
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
