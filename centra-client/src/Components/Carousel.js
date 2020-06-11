import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import M from "materialize-css";
import background1 from "../media/image.png";
import image1 from '../media/image2.png'
import image2 from '../media/image3.png'
import image3 from '../media/image4.png'
import image4 from '../media/image5.png'
import image6 from '../media/image6.png'
import logo from "../media/slogo.png";

class Homepage extends Component {
  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {

      });
    });
  }
  render() {
    return (
      <div>
        <div class="carousel">
          <a class="carousel-item" href="#one!">
            <img src={image1} />
            <p>I Block</p>
          </a>
          <a class="carousel-item" href="#two!">
            <img src={image2} />
            <p>I Block</p>
          </a>
          <a class="carousel-item" href="#three!">
            <img src={image3} />
            <p>Butterfly</p>
          </a>
          <a class="carousel-item" href="#four!">
            <img src={image4} />
            <p>Lotus</p>
          </a>
          <a class="carousel-item" href="#five!">
            <img src={image6} />
            <p>X-O</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Homepage;
