import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { Header } from "./common/header/Header";
import Pages from "./pages/pages";
import Data from "./components/flashDeals/Fdata";
import Sdata from "./components/shop/Sdata";
import Cart from "./cart/Cart";
import Footer from "./components/footer/Footer";

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;

  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id);
    if (productExist) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExist, qty: productExist.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id);
    if (productExist.qty === 1) {
      void setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExist, qty: productExist.qty - 1 }
            : item
        )
      );
    }
  };

  function handleDeleteItem(id) {
    setCartItem(cartItem.filter((item) => item.id !== id));
  }
  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Switch>
          <Route path="/" exact>
            <Pages
              productItems={productItems}
              addToCart={addToCart}
              shopItems={shopItems}
            />
          </Route>
          <Route path="/keranjang" exact>
            <Cart
              cartItem={cartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
              onDeleteItem={handleDeleteItem}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
