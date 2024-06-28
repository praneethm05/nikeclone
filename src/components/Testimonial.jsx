import React from "react";
import phil from "./phil.jpg";

export default function Testimonial() {
  return (
    <div style={{ padding: "20px", marginTop: "100px" }}>
      <h1 className="believe1">Our Founder: Phil Knight</h1>
      <img src={phil} className="imginfo"></img>
      <div className="info1">
        <p className="bio">
          Philip Hampson Knight (born February 24, 1938) is an American
          billionaire business magnate who is the co-founder and chairman
          emeritus of Nike, Inc., a global sports equipment and apparel company.
          He was previously its chairman and CEO.[1] As of December 2023, Forbes
          estimated his net worth at $45.0 billion.[2][3] He is also the owner
          of the stop motion film production company Laika. Knight is a graduate
          of the University of Oregon and the Stanford Graduate School of
          Business. He was part of the track and field club under coach Bill
          Bowerman at the University of Oregon with whom he would later co-found
          Phil Hampson Knight was born on February 24, 1938, in Portland,
          Oregon, to Bill Knight, a lawyer turned newspaper publisher, and his
          wife, Lota Cloy (née Hatfield) Knight.[5][6][7] He grew up in the
          Portland neighborhood of Eastmoreland, and attended Cleveland High
          School. According to one source, "When his father refused to give him
          a summer job at his newspaper [the now defunct Oregon Journal],
          believing that his son should find work on his own," Knight "went to
          the rival Oregonian, where he worked the morning shift tabulating
          sports scores and every morning ran home the full seven miles."[8]
          Knight continued his education at the University of Oregon in Eugene,
          where he ran for the famed Oregon track and field program, was a
          sports reporter for the Oregon Daily Emerald[9] and was a member of
          Phi Gamma Delta fraternity. Knight earned a business degree (B.B.A.)
          in 1959 in just three years.[10] That same year, Knight also received
          his Army Reserve Commission and was a "Distinguished Military
          Graduate".[10] As a middle-distance runner at Oregon, his personal
          best was 1 mile (1.6 km) in 4 minutes, 13 seconds,[11] and he won
          varsity letters for his track performances in 1957, 1958, and 1959. In
          1977, together with Bowerman and Geoff Hollister, Knight founded an
          American running team called Athletics West.[12] Nike
        </p>
      </div>
    </div>
  );
}
