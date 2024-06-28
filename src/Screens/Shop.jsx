import React from "react";
import force1 from "./assets/products/airforce1.jpeg";
import blazermid from "./assets/products/blazermid.png";
import dnacrossover from "./assets/products/dnacrossover.png";
import metcon from "./assets/products/metcon.png";
import airmax from "./assets/products/nikeairmax.png";
import reactinfinity from "./assets/products/reactinfinity.png";
import nikeblazermidyou from "./assets/products/nikeblazermid.jpeg";
import dunklow from "./assets/products/dunklow.png";
import nikeform from "./assets/products/nikeform.png";

import lightning from "./assets/lightning.png";
import cart from "./assets/cart.png";
import fav from "./assets/fav.png";
import drifit from "./assets/drifit.png";
import nikego from "./assets/products/nikego.png";
import nikegirls from "./assets/products/nikegirls.png";
import dunk from "./assets/products/dunklunar.png";
import zion from "./assets/products/zion.png";
import womensnike from "./assets/products/womensnike.png";
import womensnike2 from "./assets/products/womens2.png";
import golf from "./assets/products/golf.png";
import acg from "./assets/products/acgtee.png";



import "./ScreenStyle.css";

export default function Shop() {
  const productdata = [
    {
      name: "Nike Blazer Mid '77 By You",
      img: nikeblazermidyou,
      price: " ₹ 11895.00",
    },
    { name: "Nike Dunk Low LX Exclusive", img: dunklow, price: "₹ 11895.00" },
    { name: "Nike Form Men's Training", img: nikeform, price: "₹ 3507.00" },
    { name: "Nike APS Men's Dri-FIT", img: drifit, price: "₹ 4695.00" },
    { name: "Nike Go Women's Firm", img: nikego, price: "₹ 5795.00" },
    { name: "Nike Sportswear Girl's", img: nikegirls, price: "₹ 2495.00" },
  ];

  const productdata2 = [
    { name: "Nike Dunk Low 'Lunar New Year", img: dunk, price: "₹ 7117.00" },
    { name: "Zion Men's T-Shirt New", img: zion, price: "₹ 2195.00" },
    { name: "Nike Women's Short-Sleeve Top", img: womensnike, price: "₹ 2795.00" },
    { name: "Women's Ribbed Cropped Tank Top", img: womensnike2, price: "₹ 2495.00" },
    { name: "Nike Tour Men's Golf Polo", img: golf, price: "₹ 3295.00" },
    { name: "Nike ACG Men's T-Shirt", img: acg, price: "₹ 2195.00" },
  ];

  return (
    <div>
      <h1
        className="nikelove"
        style={{ marginTop: "50px", marginBottom: "-70px" ,textAlign:'left', marginLeft:'20px',textDecoration:'underline'}}
      >
        Best Selling Nike Products
      </h1>

      <div
        style={{
          display: "flex",
          margin: "20px",
          marginTop: "5px",
          marginBottom: "-70px",
        }}
      >
        <div style={{ flex: "1" }} className="producti">
          <img src={dnacrossover} className="productimg"></img>

          <div className="buyinfo">
            {" "}
            <h1 className="proinfo">Nike DNA Crossover</h1>{" "}
            <button className="proaction">
              <img src={lightning} className="icons"></img>
            </button>
            <button className="proaction">
              <img src={cart} className="icons"></img>
            </button>
            <button className="proaction">
              <img src={fav} className="icons"></img>
            </button>
            <p className="mrp">₹ 3895.00</p>
          </div>
        </div>

        <div style={{ flex: "1" }} className="producti">
          <img src={force1} className="productimg"></img>
          <div className="buyinfo">
            {" "}
            <h1 className="proinfo">Nike Air Force 1 Limited Edition</h1>{" "}
            <button className="proaction">
              <img src={lightning} className="icons"></img>
            </button>
            <button className="proaction">
              <img src={cart} className="icons"></img>
            </button>
            <button className="proaction">
              <img src={fav} className="icons"></img>
            </button>
            <p className="mrp">₹ 12795.00</p>
          </div>
        </div>

        <div style={{ flex: "1" }} className="producti">
          <img src={reactinfinity} className="productimg"></img>
          <div className="buyinfo">
            {" "}
            <h1 className="proinfo">Nike React Infinity Exclusive</h1>{" "}
            <button className="proaction">
              <img src={lightning} className="icons"></img>
            </button>
            <button className="proaction">
              <img src={cart} className="icons"></img>
            </button>
            <button className="proaction">
              <img src={fav} className="icons"></img>
            </button>
            <p className="mrp">₹ 17495.00</p>
          </div>
        </div>

        <div style={{ flex: "1" }} className="producti">
          <img src={blazermid} className="productimg"></img>
          <div className="buyinfo">
            {" "}
            <h1 className="proinfo">Nike Blazer Mid '77 Classic</h1>{" "}
            <button className="proaction">
              <img src={lightning} className="icons"></img>
            </button>
            <button className="proaction">
              <img src={cart} className="icons"></img>
            </button>
            <button className="proaction">
              <img src={fav} className="icons"></img>
            </button>
            <p className="mrp">₹ 7597.00</p>
          </div>
        </div>

        <div style={{ flex: "1" }} className="producti">
          <img src={airmax} className="productimg"></img>
          <div className="buyinfo">
            {" "}
            <h1 className="proinfo">Nike Air Max 270 Ultra</h1>{" "}
            <button className="proaction">
              <img src={lightning} className="icons"></img>
            </button>
            <button className="proaction">
              <img src={cart} className="icons"></img>
            </button>
            <button className="proaction">
              <img src={fav} className="icons"></img>
            </button>
            <p className="mrp">₹ 13297.00</p>
          </div>
        </div>

        <div style={{ flex: "1" }} className="producti">
          <img src={metcon} className="productimg"></img>
          <div className="buyinfo">
            {" "}
            <h1 className="proinfo">Nike Metcon Series</h1>{" "}
            <button className="proaction">
              <img src={lightning} className="icons"></img>
            </button>
            <button className="proaction">
              <img src={cart} className="icons"></img>
            </button>
            <button className="proaction">
              <img src={fav} className="icons"></img>
            </button>
            <p className="mrp">₹ 12795.00</p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          margin: "20px",
          marginTop: "5px",
          marginBottom: "-70px",
        }}
      >
        {productdata.map((pro) => (
          <div style={{ flex: "1" }} className="producti">
            <img src={pro.img} className="productimg"></img>
            <div className="buyinfo">
              {" "}
              <h1 className="proinfo">{pro.name}</h1>{" "}
              <button className="proaction">
                <img src={lightning} className="icons"></img>
              </button>
              <button className="proaction">
                <img src={cart} className="icons"></img>
              </button>
              <button className="proaction">
                <img src={fav} className="icons"></img>
              </button>
              <p className="mrp">{pro.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          margin: "20px",
          marginTop: "5px",
          marginBottom: "150px",
        }}
      >
        {productdata2.map((pro) => (
          <div style={{ flex: "1" }} className="producti">
            <img src={pro.img} className="productimg"></img>
            <div className="buyinfo">
              {" "}
              <h1 className="proinfo">{pro.name}</h1>{" "}
              <button className="proaction">
                <img src={lightning} className="icons"></img>
              </button>
              <button className="proaction">
                <img src={cart} className="icons"></img>
              </button>
              <button className="proaction">
                <img src={fav} className="icons"></img>
              </button>
              <p className="mrp">{pro.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
