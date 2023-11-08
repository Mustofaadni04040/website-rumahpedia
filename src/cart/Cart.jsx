import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./Cart.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Cart({
  cartItem,
  addToCart,
  decreaseQty,
  onDeleteItem,
}) {
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {cartItem.length === 0 && (
              <h1 className="no-items product">
                Tidak ada product didalam keranjang
              </h1>
            )}
            {cartItem.map((item, index) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list product d_flex" key={index}>
                  <div className="img">
                    <img src={item.cover} alt={item.name} width={200} />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      {item.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </h4>
                    <div className="cart-items-function">
                      <div className="removeCart">
                        <button
                          className="removeCart"
                          onClick={() => onDeleteItem(item.id)}
                        >
                          HAPUS
                        </button>
                      </div>
                      <div className="cartControl d_flex">
                        <button
                          className="desCart"
                          onClick={() => decreaseQty(item)}
                        >
                          <FontAwesomeIcon
                            icon={faMinus}
                            className="icon-min"
                          />
                        </button>
                        <span className="product-qty">{item.qty}</span>
                        <button
                          className="incCart"
                          onClick={() => addToCart(item)}
                        >
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="icon-plus"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="cart-item-price">
                      <span>Total: </span>
                      {productQty.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-total product">
            <div className="total">
              <h2>Total Keranjang</h2>
              <div className="d_flex">
                <h4>Total: </h4>
                <h3>
                  {totalPrice.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </h3>
              </div>
            </div>
            <div className="btn-checkout">
              <Link to="/pembayaran">Checkout</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
Cart.propTypes = {
  cartItem: PropTypes.array.isRequired,
  addToCart: PropTypes.func,
  decreaseQty: PropTypes.func,
  onDeleteItem: PropTypes.func,
};
