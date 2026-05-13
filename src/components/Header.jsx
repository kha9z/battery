import "./header.css";

import { Link } from "react-router-dom";

import useCartStore from "../store/cartStore";
import headerlogo from "../assets/LogoHeader.png";
import cartIcon from "../assets/Cart-Icon.png";

export default function Header({
  search,
  setSearch
}) {

  const cart = useCartStore(
    (state) => state.cart
  );
  return (
    <header className="header">

      <div className="left-section">

        <a href="#" className="header-link">
          <img
            className="header-logo"
            src={headerlogo}
            alt="Logo"
          />
        </a>

      </div>

      <div className="middle-section">

        <input
          className="search-bar"
          type="text"
          placeholder="Search"

          value={search}

          onChange={(e) => 
            setSearch(e.target.value)
          }
        />

        <button className="search-button">
          <span className="search-icon">🔎︎</span>
        </button>

      </div>

      <div className="right-section">


        <Link
          to="/cart" 
        className="header-link cart-link"
        >

          <div className="cart-quantity">
            {cart.length}
          </div>

          <img
            src={cartIcon}
            alt="Cart"
            className="cart-icon"
          />


        </Link>

      </div>

    </header>
  );
}