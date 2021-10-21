import React, { Component } from "react";
import M from "materialize-css";
import iso13485 from "../media/ISO-13485.jpg";
import ce2 from "../media/CE 0123-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

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
                Contact Us:
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
                    <p>
                      <i><FontAwesomeIcon icon={faCoffee} /> </i> i@centra.com
                    </p>
                  </li>
                </ul>
              </p>
            </div>
            <div class="col s12 m12 l4 xl4">
              <h5 class="white-text" style={{ textAlign: "left" }}>
                Office Address:
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
                Certfications
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
            © 2021 Centra For Medical Supplies
            <a class="grey-text text-lighten-4 right" href="#">
              Top of Page
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
