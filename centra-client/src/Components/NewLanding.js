import React, { Component } from "react";
import M from "materialize-css";
import Carousel from "./Carousel";
import Contact from "./Email";
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
    return (
      <div
        style={{
          backgroundImage: `url(${"background"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundOrigin: "border-box",
        }}
      >
        <div className="container">
          <div className="row">
            <Row1 />
          </div>
          <div className="row">
            <div className="col s12 m12 l12 xl12">
              <Carousel />
            </div>

            <div className="row">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parallax;
