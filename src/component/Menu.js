import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
const Menu = () => {

  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/">Service</Link>
        </li>
        <li>
          <Link to='/product'>Product</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/product">product-details</Link>
        </li>
      </ul>

    </nav>
  );
};

export default Menu;
