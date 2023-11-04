import FlashDeals from "../components/flashDeals/FlashDeals";
import Home from "../components/mainpage/Home";
import PropTypes from "prop-types";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newArrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shop/Shop";
import Banner from "../components/banner/Banner";
import { useState } from "react";
import Modal from "../components/modal/Modal";

export default function Pages({
  productItems,
  cartItem,
  addToCart,
  shopItems,
}) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  modal
    ? document.body.classList.add("active-modal")
    : document.body.classList.remove("active-modal");

  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals
        productItems={productItems}
        addToCart={addToCart}
        onToggleModal={toggleModal}
      />
      {modal && <Modal onToggleModal={toggleModal} />}
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Banner />
    </>
  );
}

Pages.propTypes = {
  productItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      discount: PropTypes.number.isRequired,
      cover: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
  cartItem: PropTypes.array,
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
