import React, { Component } from "react";
import M from "materialize-css";
import Carousel from "./Carousel";
import Contact from "./Email";
import parallax1 from "../media/8.png";
import parallax2 from "../media/16.jpg";
import parallax3 from "../media/4.png";
import image1 from "../media/Picture2.png";
import image4 from "../media/Picture6.png";
import image5 from "../media/Picture1.png";
import image6 from "../media/Picture12.png";
import background from "../media/15.jpg";

import newImage from "../media/21.jpg";
import Row1 from "./Row1";

class Parallax extends Component {
  state = { width: -1, height: -1, slideIndex: 1, slides: [], dots: [] };

  getWindowDimension = () => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    return { width, height };
  };

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".parallax");
      var instances = M.Parallax.init(elems, true);
    }); 
    var result = this.getWindowDimension();

    this.setState({ width: result.width, height: result.height });

    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".collapsible");
      var instances = M.Collapsible.init(elems, true);
      var instance_ = M.Carousel.init({
        fullWidth: true,
        indicators: true,
      });
    });

    console.log(this.state.slideIndex);
  }

  render() {
    //Desktop Version
    return (
      <div className="">
        <div class="parallax-container">
          <div class="parallax">
            <img src={parallax1} />
          </div>
        </div>
        <div class="section white">
          <div class="row container">
            <Row1 />
          </div>
        </div>
        <div class="parallax-container">
          <div class="parallax">
            <img src={parallax3} />
          </div>
        </div>
        <div class="section white">
          <div class="row container">
            <div className="row">
              <h2>Our Prodcuts</h2>
            </div>
            <Carousel />
          </div>
        </div>

        <div class="parallax-container">
          <div class="parallax">
            <img src={parallax2} />
          </div>
        </div>
        <div class="section white">
          <div class="row container">
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default Parallax;
