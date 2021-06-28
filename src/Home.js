import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/ZTY3YTgwOGEt/ZTY3YTgwOGEt-NWZkMWY5MjQt-w1500._CB665900152_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product />
        {/* Product */}
      </div>
      <div className="home__row">
        {/* Product */}
        {/* Product */}
        {/* Product */}
      </div>
      <div className="home__row">{/* Product */}</div>
    </div>
  );
}

export default Home;
