import React, { Component } from "react";
import M from "materialize-css";
import rp from "request-promise";
//import catalouge from "../media/cata2021.pdf";

class Homepage extends Component {
  state = {
    imageURL: [
      "https://drive.google.com/uc?export=view&id=1StwC84CH_FhHCvF3GBc-ezgpH-0587bV",
      "https://drive.google.com/uc?export=view&id=1sOX_SAh0R5Dg0v8uAPwBIzf7KqQ2fT9v",
      "https://drive.google.com/uc?export=view&id=1KfijLTutmR41bSmrSKkeALuc1BRF5beI",
      "https://drive.google.com/uc?export=view&id=10XnBBwkuoz-iy8ovTWHFqLwHf8MnnYYg",
      "https://drive.google.com/uc?export=view&id=11G1i8A94oJ1UeJImK0-xKiqV6-Svad0M",
    ],
    images: [],
    data: [],
    cargo: null,
  };
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
      M.Carousel.init(elems, {
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
        //console.log(data);
        if (data.error === undefined) {
          //All is good
          this.setState({ data: data });
          var toastHTML = "<span>We will be in touch soon</span>";
          M.toast({ html: toastHTML });
        }
      })
      .catch((err) => {
        //console.log(err);
      });

    this.timeFrame(6000);
  }
  timeFrame = (timeout) => {
    setInterval(() => {
      var elem = document.querySelectorAll(".carousel")[0];
      var instance = M.Carousel.getInstance(elem);
      instance.next();
    }, timeout);
  };
  render() {
    return (
      <div className="row">
        <div className="col  l1"></div>
        <div className="col s12 l10">
          <div
            class="carousel carousel-slider center"
            data-indicators="true"
            style={{ border: "solid #0097a7 0px" }}
          >
            <div 
              class="carousel-item white white-text"
              href="#one!"
              style={{
                backgroundImage: `url(${this.state.imageURL[0]})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundOrigin: "content-box",
                backgroundClip: "content-box",
              }}
            >
              <div>
                <h4
                  class="flow-text white-text  center-align"
                  style={{ backgroundColor: "rgba(97,97,97,0.5)", padding: "5px" }}
                >
                  Surgical Packs and Drapes
                </h4>
              </div>
            </div>

            <div 
              class="carousel-item white white-text"
              href="#two!"
              style={{
                backgroundImage: `url(${this.state.imageURL[1]})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundOrigin: "border-box",
              }}
            >
              <h4  class="flow-text white-text  center-align"
                  style={{ backgroundColor: "rgba(97,97,97,0.5)", padding: "5px" }}>
                Scrub Suits
              </h4>
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
              <h4  class="flow-text white-text  center-align"
                  style={{ backgroundColor: "rgba(97,97,97,0.5)", padding: "5px" }}>
                Facemasks and Overheads
              </h4>
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
              <h4  class="flow-text white-text  center-align"
                  style={{ backgroundColor: "rgba(97,97,97,0.5)", padding: "5px" }}>
                Protective Apparel
              </h4>
            </div>
            <div 
              class="carousel-item blue white-text"
              href="#five!"
              style={{
                backgroundImage: `url(${this.state.imageURL[4]})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundOrigin: "border-box",
              }}
            >
              <h4  class="flow-text white-text  center-align"
                  style={{ backgroundColor: "rgba(97,97,97,0.5)", padding: "5px" }}>
                Surgical Gowns
              </h4>
            </div>
          </div>
        </div>
        <div className="col l1"></div>
      </div>
    );
  }
}

export default Homepage;
