import React from "react";
import img1 from "../pizzas/funghi.jpg";
import img2 from "../pizzas/focaccia.jpg";
import img3 from "../pizzas/margherita.jpg";
import img4 from "../pizzas/prosciutto.jpg";
import img5 from "../pizzas/salamino.jpg";
import img6 from "../pizzas/spinaci.jpg";

const Menu = () => {
  return (
    <div className="pizza-menu" id="recipe">
      <h1>our menu</h1>
      <div className="menu-card">
        <div className="card">
          <img src={img1} alt="" />
          <h2>funghi pizza</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            odio natus repudiandae placeat aspernatur nulla.
          </p>
          <button className="menu-btn">
            <span>$15.7</span>order now
          </button>
        </div>
        <div className="card">
          <img src={img2} alt="" />
          <h2>focaccia pizza</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            odio natus repudiandae placeat aspernatur nulla.
          </p>
          <button className="menu-btn">
            <span>$11.7</span>order now
          </button>
        </div>
        <div className="card">
          <img src={img3} alt="" />
          <h2>margherita pizza</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            odio natus repudiandae placeat aspernatur nulla.
          </p>
          <button className="menu-btn">
            <span>$19.7</span>order now
          </button>
        </div>
        <div className="card">
          <img src={img4} alt="" />
          <h2>prosciutto pizza</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            odio natus repudiandae placeat aspernatur nulla.
          </p>
          <button className="menu-btn">
            <span>$20.5</span>order now
          </button>
        </div>
        <div className="card">
          <img src={img5} alt="" />
          <h2>salamino pizza</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            odio natus repudiandae placeat aspernatur nulla.
          </p>
          <button className="menu-btn">
            <span>$13.12</span>order now
          </button>
        </div>
        <div className="card">
          <img src={img6} alt="" />
          <h2>spinaci pizza</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            odio natus repudiandae placeat aspernatur nulla.
          </p>
          <button className="menu-btn">
            <span>$15.7</span>order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
