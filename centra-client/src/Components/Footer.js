import React, { Component } from "react";
import M from "materialize-css";
import iso13485 from "../media/ISO-13485.jpg";
import ce2 from "../media/CE 0123-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".tooltipped");
      var instances = M.Tooltip.init(elems, {
        inDuration: 50,
        exitDelay: 50,
      });
    });
  }

  render() {
    const ceProof =
      "https://drive.google.com/file/d/1Jw1SWgybJH2mjiA5zkHUpn-xxYwNmbA3/view?usp=sharing";
    const isoProof =
      "https://drive.google.com/file/d/14f1-tIBVwNUMbv7u3qd4px3pIioO9r27/view?usp=sharing";
    return (
      <footer class="page-footer indigo darken-4">
        <div class="container">
          <div class="row">
            <div class="col s12 m12 l4 xl4">
              <h5 class="white-text" style={{ textAlign: "left" }}>
               <b> CONTACT US</b>
              </h5>
              <p class="grey-text text-lighten-4">
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>
                      <i class="material-icons">phone_iphone</i> +20 (111)
                      2911174
                    </p>
                  </li>
                  <li>
                    <p>
                      <i class="material-icons">phone</i> +20 (2) 38330869 / +20
                      (2) 38330856
                    </p>
                  </li>
                  <li>
                    <p>
                      <i class="material-icons">local_printshop</i> +20 (2)
                      38330557
                    </p>
                  </li>
                  <li>
                    <p>
                      <i class="material-icons">email</i> info@centra-egypt.com
                    </p>
                  </li>
                  <li>
                    <p style={{ paddingLeft: "3.5px" }}>
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        width="24px"
                        height="24px"
                        size="lg"
                      />
                      <a
                        style={{ paddingLeft: "5px" }}
                        className="white-text"
                        href="https://www.linkedin.com/company/centraegypt"
                      >
                        @centraegypt
                      </a>
                    </p>
                  </li>
                </ul>
              </p>
            </div>
            <div class="col s12 m12 l4 xl4">
              <h5 class="white-text" style={{ textAlign: "left" }}>
                <b>ADDRESS</b>
              </h5>
              <ul style={{ textAlign: "left" }}>
                <li>Centra</li>
                <li>206 Ext. of sixth industrial area</li>
                <li>6th Of October City, Giza</li>
                <li>Egypt</li>
              </ul>
            </div>
            <div class="col s12 m12 l4 xl4">
              <h5 class="white-text" style={{ textAlign: "left" }}>
               <b> CERTFICATIONS</b>
              </h5>
              <div style={{ textAlign: "left" }}>
                <a href={ceProof}>
                  <img
                    src={ce2}
                    class="certficates tooltipped"
                    data-tooltip="CE 0123"
                    style={{ borderRadius: "50%" }}
                  ></img>
                </a>
                <a href={isoProof}>
                  <img
                    src={iso13485}
                    class="certficates tooltipped"
                    data-tooltip="ISO 13485"
                    style={{ borderRadius: "50%" }}
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
           <p style={{ textAlign: "left" }}> © 2021 Centra For Medical Supplies 
            <a class="grey-text text-lighten-4 right" href="#">
            <img class="tooltipped" data-position="top" data-tooltip="Back to top"
             style={{ width: "30px",
                        height: "30px",
                        size:"lg"
                        }}
                      
                        src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-up-arrow-alignment-and-tools-kiranshastry-gradient-kiranshastry.png"/>
            </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
