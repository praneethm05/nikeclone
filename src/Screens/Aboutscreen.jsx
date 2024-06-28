import React from "react";
import "./ScreenStyle.css";
import img1 from "./assets/about.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpeg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import img9 from "./assets/img9.png";
import img10 from "./assets/img10.jpg";
import img11 from "./assets/img11.jpg";
import img12 from "./assets/img12.jpeg";
import img13 from "./assets/img13.jpg";
import img14 from "./assets/img14.jpg";
import img15 from "./assets/img15.jpg";
import img16 from "./assets/img16.jpg";
import img17 from "./assets/img17.jpg";
import img18 from "./assets/img18.jpg";
import heart from "./assets/heart.png";
import shoedog from "./assets/shoedog.jpeg";
import nikedarklogo from "../components/nikelogotransition.png";
import brand from "../components/jordanlogo.jpg";
import amazon from "./assets/amazonlogo.png";
import blink from "./assets/blink.jpg";
import { Link } from "react-router-dom";

export default function AboutScreen() {
  return (
    <div>
      <div className="mainsquare" style={{ width: "100%" }}>
        <div style={{ display: "flex", overflow: "hidden" }}>
          <div className="squaredivs row1" style={{ flex: 1 }}>
            <img className="divimg" src={img1}></img>{" "}
            <img className="divimg" src={img2}></img>{" "}
            <img className="divimg" src={img3}></img>{" "}
            <img className="divimg" src={img4}></img>{" "}
            <img className="divimg" src={img5}></img>{" "}
            <img className="divimg" src={img6}></img>{" "}
            <img className="divimg" src={img1}></img>{" "}
            <img className="divimg" src={img2}></img>{" "}
            <img className="divimg" src={img3}></img>{" "}
            <img className="divimg" src={img4}></img>{" "}
            <img className="divimg" src={img5}></img>{" "}
            <img className="divimg" src={img6}></img>{" "}
            <img className="divimg" src={img1}></img>{" "}
            <img className="divimg" src={img2}></img>{" "}
            <img className="divimg" src={img3}></img>{" "}
            <img className="divimg" src={img4}></img>{" "}
            <img className="divimg" src={img5}></img>{" "}
            <img className="divimg" src={img6}></img>{" "}
            <img className="divimg" src={img1}></img>{" "}
            <img className="divimg" src={img2}></img>{" "}
            <img className="divimg" src={img3}></img>{" "}
            <img className="divimg" src={img4}></img>{" "}
            <img className="divimg" src={img5}></img>{" "}
            <img className="divimg" src={img6}></img>{" "}
          </div>
        </div>

        <div style={{ display: "flex", overflow: "hidden" }}>
          <div className="squaredivs row2" style={{ flex: 1 }}>
            <img className="divimg" src={img7}></img>{" "}
            <img className="divimg" src={img8}></img>{" "}
            <img className="divimg" src={img9}></img>{" "}
            <img className="divimg" src={img10}></img>{" "}
            <img className="divimg" src={img11}></img>{" "}
            <img className="divimg" src={img12}></img>{" "}
            <img className="divimg" src={img7}></img>{" "}
            <img className="divimg" src={img8}></img>{" "}
            <img className="divimg" src={img9}></img>{" "}
            <img className="divimg" src={img10}></img>{" "}
            <img className="divimg" src={img11}></img>{" "}
            <img className="divimg" src={img12}></img>{" "}
            <img className="divimg" src={img7}></img>{" "}
            <img className="divimg" src={img8}></img>{" "}
            <img className="divimg" src={img9}></img>{" "}
            <img className="divimg" src={img10}></img>{" "}
            <img className="divimg" src={img11}></img>{" "}
            <img className="divimg" src={img12}></img>{" "}
            <img className="divimg" src={img7}></img>{" "}
            <img className="divimg" src={img8}></img>{" "}
            <img className="divimg" src={img9}></img>{" "}
            <img className="divimg" src={img10}></img>{" "}
            <img className="divimg" src={img11}></img>{" "}
            <img className="divimg" src={img12}></img>{" "}
          </div>
        </div>

        <div style={{ display: "flex", overflow: "hidden" }}>
          <div className="squaredivs row3" style={{ flex: 1 }}>
            <img className="divimg" src={img13}></img>{" "}
            <img className="divimg" src={img14}></img>{" "}
            <img className="divimg" src={img15}></img>{" "}
            <img className="divimg" src={img16}></img>{" "}
            <img className="divimg" src={img17}></img>{" "}
            <img className="divimg" src={img18}></img>{" "}
            <img className="divimg" src={img13}></img>{" "}
            <img className="divimg" src={img14}></img>{" "}
            <img className="divimg" src={img15}></img>{" "}
            <img className="divimg" src={img16}></img>{" "}
            <img className="divimg" src={img17}></img>{" "}
            <img className="divimg" src={img18}></img>{" "}
            <img className="divimg" src={img13}></img>{" "}
            <img className="divimg" src={img14}></img>{" "}
            <img className="divimg" src={img15}></img>{" "}
            <img className="divimg" src={img16}></img>{" "}
            <img className="divimg" src={img17}></img>{" "}
            <img className="divimg" src={img18}></img>{" "}
            <img className="divimg" src={img13}></img>{" "}
            <img className="divimg" src={img14}></img>{" "}
            <img className="divimg" src={img15}></img>{" "}
            <img className="divimg" src={img16}></img>{" "}
            <img className="divimg" src={img17}></img>{" "}
            <img className="divimg" src={img18}></img>{" "}
          </div>
        </div>
      </div>
      <h1 className="tagline1">Trusted and loved by Everyone </h1>

      <div className="whyus">
        <p className="nikelove">
          People have always kept <img src={nikedarklogo} width={100}></img>{" "}
          Close to their
          <img src={heart} width={100}></img>
        </p>
      </div>

      <div className="whyus">
        <p className="nikelovesecond">AND SO HAVE WE</p>

        <p className="acheivements">
          "Nike is more than just a brand" it's a hero that has touched the
          lives of millions worldwide. Through innovation, inspiration, and
          unwavering commitment, Nike has not only revolutionized sports apparel
          and footwear but has also brought about significant positive change in
          communities globally. From pioneering technologies like Nike Air and
          Flyknit that enhance athletic performance and comfort to iconic
          campaigns like "Just Do It" that motivate individuals to push their
          limits, Nike has empowered countless athletes and enthusiasts to
          achieve their dreams. Nike extends its deepest gratitude to its global
          family—employees, athletes, partners, and customers—who have been
          integral to its journey. You are the heartbeat of our success, driving
          us to innovate and elevate every day. In the spirit of gratitude and
          giving back, Nike pledges to continue its mission of creating positive
          change. Whether through sustainable practices that protect our planet
          for future generations, initiatives that promote diversity and
          inclusivity, or investments in communities to foster growth and
          opportunity, Nike remains committed to making a difference beyond the
          world of sports. Together, as part of the Nike family, we stride
          forward with purpose and pride, knowing that every step we take leaves
          a lasting impact. Thank you for being a part of our story.
        </p>
      </div>

      <img src={brand} width={100} className="brandimg"></img>

      <div className="shoedog">
        {/* <div className="bookimgcontainer" > */}
        <img style={{ flex: "1" }} src={shoedog} className="img"></img>
        {/* </div> */}

        <div className="infocontainer">
          <h2 className="booktitle">
            Shoe Dog: A Journey of Grit, Innovation, and Inspiration
          </h2>
          <p
            className="acheivements"
            style={{ color: "white", marginTop: "30px", fontSize: "20px" }}
          >
            In the pages of "Shoe Dog," Phil Knight's memoir, Nike's remarkable
            journey unfolds—a tale of relentless determination, bold risks, and
            transformative impact. Just as Nike transcends beyond footwear,
            "Shoe Dog" goes beyond a mere memoir; it's a testament to the human
            spirit and the power of dreams. Discover how Phil Knight and his
            team turned a startup born in a garage into a global powerhouse that
            redefined the sportswear industry. Through triumphs and setbacks,
            Knight's narrative resonates with resilience, creativity, and the
            courage to defy conventional wisdom. "Shoe Dog" invites you to delve
            deeper into Nike's evolution—its pivotal moments, groundbreaking
            innovations, and the profound relationships that shaped its success.
            It's a journey that celebrates not just business acumen but also the
            values of perseverance, passion, and the relentless pursuit of
            excellence. To truly understand Nike's impact and ethos, immerse
            yourself in "Shoe Dog." Join us in celebrating a legacy built on
            innovation, empowerment, and the enduring quest to inspire athletes
            and dreamers alike.
          </p>

          <h3 className="avail">Shop from</h3>
          <br></br>
          <a
            style={{ marginLeft: "-640px" }}
            href="https://www.amazon.in/Shoe-Dog-Phil-Knight/dp/1471146715"
          >
            <img className="shopfrom" src={amazon}></img>
          </a>

          <a
            style={{ marginLeft: "20px" }}
            href="https://blinkit.com/prn/shoe-dog---a-memoir-by-the-creator-of-nike/prid/513347"
          >
            <img className="shopfrom" src={blink}></img>
          </a>
        </div>
      </div>

      <p
        className="nikelove"
        style={{ marginTop: "-250px", marginBottom: "30px" }}
      >
        Our Mission & Vision
      </p>

      <div style={{ display: "flex" ,marginBottom:'100px'}}>
        <p className="mission">
          Our mission is to bring inspiration and innovation to every
          athlete in the world. We believe that if you have a body, you are an
          athlete. Our goal is to push the boundaries of human potential, create
          groundbreaking products, and make a positive impact on the communities
          we serve. We strive to empower individuals to lead active and healthy
          lives, while championing diversity, sustainability, and social
          responsibility. Together, we move the world forward through the power
          of sport.
        </p>
        <p className="mission">
          Our vision is to create a world where every person can
          achieve their best through sport. We aim to lead in innovation,
          champion sustainability, and foster an inclusive culture that empowers
          all individuals. By breaking barriers and inspiring movement, we
          strive to make a positive impact on global communities. Our goal is to
          ensure that everyone can experience the transformative power of sport,
          driving connection, equity, and well-being across the globe.
        </p>
      </div>
    </div>
  );
}
