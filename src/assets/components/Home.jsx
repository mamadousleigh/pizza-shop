import React from "react";
import pizza from "../pizzas/focaccia.jpg";

const Home = () => {
  return (
    <div className="home-pizza" id="home">
      <div className="pizza-content">
        <h1>about us</h1>
        <h2>
          we serve delicious and<span> quality pizzas</span>
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          suscipit earum facere ipsum tenetur cum autem exercitationem optio
          maiores odio!
        </p>
        <button className="content-btn">read more...</button>
      </div>
      <div className="img-pizza">
        <img src={pizza} alt="pizza shop" />
      </div>
    </div>
  );
};

export default Home;
