import React, { Component } from "react";
import M from "materialize-css";
import iso13485 from "../media/ISO-13485.jpg";
import ce2 from "../media/CE 0123-1.jpg";


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
      <footer class="page-footer blue darken-4">
        <div class="container">
          <div class="row">
            <div class="col l4">
              <h5 class="white-text" style={{ textAlign: "left" }}>
                About:
              </h5>
              <p class="grey-text text-lighten-4">
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>
                      <i class="material-icons">phone_iphone</i> +20 (111)
                      4888898
                    </p>
                  </li>
                  <li>
                    <p>
                      <i class="material-icons">phone</i> +20 (2) 27429697 /
                      27429698
                    </p>
                  </li>
                  <li>
                    <p>
                      <i class="material-icons">local_printshop</i> +20 (2)
                      38210475
                    </p>
                  </li>
                  <li>
                    <p>
                      <i class="material-icons">email</i> info@centra-egypt.com
                    </p>
                  </li>
                </ul>
              </p>
            </div>
            <div class="col l4">
              <h5 class="white-text" style={{ textAlign: "left" }}>
                Office Address:
              </h5>
              <ul style={{ textAlign: "left" }}>
                <li>Centra</li>
                <li>206 of 6th Extension Area</li>
                <li>6th Of October City, Giza</li>
                <li>Egypt</li>
              </ul>
            </div>
            <div class="col l4">
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
            © 2020 Centra For Medical Supplies
            <a class="grey-text text-lighten-4 right" href="#">
              Site Map
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
