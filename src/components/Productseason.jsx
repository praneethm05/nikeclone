import React from "react";
import "./componentstyle.css";
import jordan from "./jordanlogo.jpg";
import img1 from "./assets/carrousel1.png";
import img2 from "./assets/carrousel2.png";
import img3 from "./assets/carrousel3.png";
import img4 from "./assets/carrousel4.jpeg";
import img5 from "./assets/carrousel4.png";
import img6 from "./assets/carrousel5.jpeg";
import img7 from "./assets/carrousel6.png";
import img8 from "./assets/carrousel7.jpeg";
import img9 from "./assets/carrousel9.jpeg";

export default function productseason() {
  return (
    <div>
      <img src={jordan} className="jordan"></img>
      <h3 className="titlecolour">COLORS OF THE SEASON</h3>

      <div className="product">
        <div>
          <img src={img9} className="pimage"></img>
          <p className="clothInfo">Ocean Blue</p>
        </div>

        <div>
          <img src={img8} className="pimage"></img>
          <p className="clothInfo">Light Scale Grey</p>
        </div>

        <div>
          <img src={img4} className="pimage"></img>
          <p className="clothInfo">Earthy Neutrals</p>
        </div>

        <div>
          <img src={img6} className="pimage"></img>
          <p className="clothInfo">Tropical Seafoam</p>
        </div>

        <div>
          <img src={img7} className="pimage"></img>
          <p className="clothInfo">Soft Lilac</p>
        </div>

        <div>
          <img src={img3} className="pimage"></img>
          <p className="clothInfo">Blue Summer Sky</p>
        </div>

        <div>
          <img src={img5} className="pimage"></img>
          <p className="clothInfo">Sunkissed Peach</p>
        </div>

        <div>
          <img src={img1} className="pimage"></img>
          <p className="clothInfo">Dessert Neutrals</p>
        </div>

        <div>
          <img src={img2} className="pimage"></img>
          <p className="clothInfo">Seafoam Green</p>
        </div>
      </div>
    </div>
  );
}
