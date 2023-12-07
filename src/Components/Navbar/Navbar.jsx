import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/pc planet logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} className="nav-planet-logo" alt="" />
        <p>PCPlanet</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Hardware");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Hardware">
            Hardware
          </Link>
          {menu === "Hardware" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Software");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Software">
            Software
          </Link>
          {menu === "Software" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("other product");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/other product">
            Other
          </Link>{" "}
          {menu === "other product" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
