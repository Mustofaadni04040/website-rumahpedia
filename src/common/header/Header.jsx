import "./Header.css";
import { Head } from "./Head";
import { Search } from "./Search";
import { NavBar } from "./Navigasi";
import PropTypes from "prop-types";

export const Header = ({ cartItem }) => {
  return (
    <>
      <Head />
      <Search cartItem={cartItem} />
      <NavBar />
    </>
  );
};

Header.propTypes = {
  cartItem: PropTypes.array,
};
