import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import M from "materialize-css";
import rp from "request-promise";

class Homepage extends Component {
  state = {
    imageURL: [
      "https://drive.google.com/uc?export=view&id=1gkq1ZKEr8F8MsISG9e69_Ja5B8jEqwg7",
      "https://drive.google.com/uc?export=view&id=1pKzGJ-hkUHXb5C2TIcGkFO3m8dPlX8fD",
      "https://drive.google.com/uc?export=view&id=1kUGZegXRPoUeN-p9M4-WSI8AHsyFgbKH",
      "https://drive.google.com/uc?export=view&id=1F0YCrbBmfqXARhXmK3VYD3frrynCggOf",
    ],
    images: [],
    data: [],
    cargo: null,
  };
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
      var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true,
      });
    });

    const requestOptions = {
      uri: this.state.imageURL[0],
      method: "GET",
    };
    rp(requestOptions)
      .then((data) => {
        console.log(data);
        if (data.error === undefined) {
          //All is good
          this.setState({ data: data });
          var toastHTML = "<span>We will be in touch soon</span>";
          M.toast({ html: toastHTML });
        }
      })
      .catch((err) => {
        console.log(err);
        M.toast({ html: err });
      });

    this.timeFrame(10000);
  }
  timeFrame = (timeout) => {
    const interval = setInterval(() => {
      var elem = document.querySelectorAll(".carousel")[0];
      var instance = M.Carousel.getInstance(elem);
      instance.next();
      console.log(elem);
    }, timeout);
  };
  render() {
    return (
      <div class="carousel carousel-slider center" data-indicators="true">
        <div
          class="carousel-item white white-text"
          href="#one!"
          style={{
            backgroundImage: `url(${this.state.imageURL[0]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundOrigin: "border-box",
          }}
        >
          <h2 class="black-text">Protective Apparel</h2>
          <p class="black-text">This is your first panel</p>
        </div>

        <div
          class="carousel-item white white-text"
          href="#two!"
          style={{
            backgroundImage: `url(${this.state.imageURL[1]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundOrigin: "border-box",
          }}
        >
          <h2 class="black-text">Face Mask and Overhead</h2>
        </div>

        <div
          class="carousel-item white white-text"
          href="#three!"
          style={{
            backgroundImage: `url(${this.state.imageURL[2]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundOrigin: "border-box",
          }}
        >
          <h2 class="black-text">General Drapes and Packages</h2>
        </div>

        <div
          class="carousel-item blue white-text"
          href="#four!"
          style={{
            backgroundImage: `url(${this.state.imageURL[3]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundOrigin: "border-box",
          }}
        >
          <h2 class="black-text">Scrub Suit</h2>
        </div>
      </div>
    );
  }
}

export default Homepage;
