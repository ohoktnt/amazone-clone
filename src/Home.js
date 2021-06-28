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
        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses "
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Fire TV Stick 4K streaming device with Alexa built in, Ultra HD, Dolby Vision, includes the Alexa Voice Remote"
            price={69.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_SL1000_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="
            Mkono Plant Stand Mid-Century Modern Plant Stand Indoor Flower Pot Holder Home Decor(Plant and Pot NOT Included),Brown"
            price={31.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61M1bd7bltL._AC_SL1500_.jpg"
            rating={5}
          />{" "}
          <Product
            id="4"
            title="S'well Stainless Steel Roamer Bottle-40 Fl Oz-Onyx Triple-Layered Vacuum-Insulated Containers Keeps Drinks Cold for 48 Hours and Hot for 16-BPA-Free Travel Water Bottle, 40oz"
            price={65.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61JpAOsIPWL._AC_SL1500_.jpg"
            rating={5}
          />{" "}
          <Product
            id="4"
            title="ZENS Sake Set Glass,Saki Cups Sake Carafe and 4 Cup Set for Warmer or Cold Japanese Sake Wine with Stone Coaster & Towel"
            price={89.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61IGHnLhVvL._AC_SL1000_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id=""
            title='Samsung 65" TU8000 4K Ultra HD HDR Smart TV (UN65TU8000FXZC) [Canada Version]'
            price={1198.0}
            image="https://images-na.ssl-images-amazon.com/images/I/914kUfj3ypL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
