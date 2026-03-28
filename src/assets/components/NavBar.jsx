import React from "react";
import image from "../pizzas/pizza-cart-2.png";
import logo1 from "../pizzas/logo.png";

const NavBar = () => {
  return (
    <div className="pizza">
      <nav className="navbar">
        <div className="logo">
          <img src={logo1} alt="logo" />
          <span> pizza</span>
        </div>
        <ul>
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#recipe">recipe</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
        </ul>
        <div className="cart">
          <img src={image} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
