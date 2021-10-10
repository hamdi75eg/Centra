import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import M from "materialize-css";

class Homepage extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
      var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true,
  
      });
    });
  }
  render() {
    return (
      <div class="carousel carousel-slider center" data-indicators="true">
        <div class="carousel-fixed-item left">
          <a class="btn waves-effect white grey-text darken-text-2">button 1</a>
        </div>
       

        <div
          class="carousel-item red white-text"
          href="#one!"
          
          style={{
            backgroundImage: `url("https://drive.google.com/uc?export=view&id=1gkq1ZKEr8F8MsISG9e69_Ja5B8jEqwg7")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            backgroundOrigin: "border-box",
          }}
        >
          <h2>First Panel</h2>
          <p class="white-text">This is your first panel</p>
        </div>

        <div class="carousel-item amber white-text" href="#two!">
          <h2>Second Panel</h2>
          <p class="white-text">This is your second panel</p>
        </div>

        <div class="carousel-item green white-text" href="#three!">
          <h2>Third Panel</h2>
          <p class="white-text">This is your third panel</p>
        </div>

        <div class="carousel-item blue white-text" href="#four!">
          <h2>Fourth Panel</h2>
          <p class="white-text">This is your fourth panel</p>
        </div>

      </div>
    );
  }
}

export default Homepage;
