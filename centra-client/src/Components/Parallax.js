import React, { Component } from "react";
import M from "materialize-css";
import image1 from "../media/Picture2.png";
import image4 from "../media/Picture6.png";
import image5 from "../media/Picture1.png";
import image6 from "../media/Picture12.png";

class Parallax extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".parallax");
      var instances = M.Parallax.init(elems, true);
    });
  }
  render() {
    return (
      <div>
        <div class="parallax-container">
          <div class="parallax">
            <img src={image1} />
          </div>
        </div>
        <div class="section blue darken-4">
          <div class="row container">
            <h3 class="white-text header" style={{ textAlign: "justify" }}>
              Who we are
            </h3>
            <p
              class="white-text text-darken-3 lighten-3"
              style={{ textAlign: "justify" }}
            >
              Established in 2003, Centra is an independent, privately owned
              company, specialized in manufacturing and supplying disposable
              medical wearing apparel. Our production facility is equipped with
              technology for production of medical and hygienic products from
              non-woven textiles and updated on regular basis to meet the
              ever-changing requirements of the healthcare industry. The ability
              to customize our range of disposable kits as per customer's
              requirements has given us an edge over our competitors in the
              respective main
            </p>
          </div>
        </div>
        <div class="parallax-container">
          <div class="parallax">
            <img src={image5} />
          </div>
        </div>
        <div class="section blue darken-4">
          <div class="row container">
            <h2 class="white-text header" style={{ textAlign: "justify" }}>
              Our Strengths?
            </h2>
            <p
              class="white-text text-darken-3 lighten-3"
              style={{ textAlign: "justify" }}
            >
              We have been able to design and develop highly functional products
              by keeping the aspects of our customers, physicians or healthcare
              professionals together. The materials used are made from high
              quality medical grade material - light non-absorbent, non
              permeable, breathable, and biodegradable - which is extremely low
              linting thus eliminating the risk of airborne infections. The
              quality control unit is headed by qualiffed staff to ensure the
              highest level quality control.
            </p>
          </div>
        </div>
        <div class="parallax-container">
          <div class="parallax">
            <img src={image6} />
          </div>
        </div>
        <div class="section blue darken-4">
          <div class="row container">
            <h2 class="white-text header" style={{ textAlign: "justify" }}>
              Infection Control
            </h2>
            <p
              class="white-text text-darken-3 lighten-3"
              style={{ textAlign: "justify" }}
            >
              It is a documented fact that micro-organisms found on human skin
              are the primary cause of wound infection in surgery. This is why
              effective sterile draping and sterile gowns for hospital sta is an
              extremely important aspect of infection control. Textile products
              become penetrable to bacteria after some usage and do not provide
              proper protection. Scientiffc studies has proven that expenditures
              on infection prevention has always been less costly than
              treatment. Infection increases the patients length of recovery
              Time in the hospital, the amount of antibiotics used, supplies and
              time of hospital staff. These increased costs alone are well above
              the investment for superior draping and sterile techniques. The
              above mentioned facts have been the reference point for Centra to
              develop the sterile drapes and gowns to prevent wound infection.
            </p>
          </div>
        </div>
        <div class="parallax-container" style={{ height: "300px" }}>
          <div class="parallax">
            <img src={image4} />
          </div>
        </div>
      </div>
    );
  }
}

export default Parallax;
