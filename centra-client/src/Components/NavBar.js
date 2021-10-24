import React, { Component } from "react";
import M from "materialize-css";
import logo from "../media/logo.2c8dadd5.png";
import catalouge from "../media/cata2021.pdf";
import wallpaper from "../media/centra-2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".dropdown-trigger");
      var instances = M.Dropdown.init(elems, true);
    });
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, true);
    });
  }
  render() {
    return (
      <div>
        <nav>
          <a data-target="slide-out" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <div
            class="nav-wrapper indigo darken-4"
            style={{ paddingBottom: "20px" }}
          >
            <a href="/" class="brand-logo" style={{display:"block"}}>
              <img
                src={logo}
                width="198px"
                height="50px"
                style={{ marginLeft: "20px",marginTop:"4px"}}
              />
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a
                  disabled
                  style={{
                    fontsize: "1.875em",
                    color: "#1a237e",
                    transition: "none",
                    pointerEvents: "none",
                  }}
                >
                  Our Products
                </a>
              </li>
              <li>
                <a class="tooltipped" data-position="left" data-tooltip="Press to download catalogue"
                href={"https://drive.google.com/uc?export=view&id=15TUOZ8fjyTEGSEhmalWyoAkkOhsn2Dip"}>
                  
                  <FontAwesomeIcon
                    icon={faDownload}
                    width="28px"
                    height="28px"
                    style={{paddingRight:"3px"}}
                  />
                  {" "}
                  Download Catalogue{" "}
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <ul id="slide-out" class="sidenav">
          <li>
            <div class="user-view">
              <div class="background">
                <img src={wallpaper} width="300px" height="150px" />
              </div>
              <a >
                <img class="" alt="" />
              </a>
              <a>
                <span class="white-text name"></span>
              </a>
              <a>
                <span class="white-text email"></span>
              </a>
            </div>
          </li>
          <li>
            <a href={"https://drive.google.com/uc?export=view&id=15TUOZ8fjyTEGSEhmalWyoAkkOhsn2Dip"} style={{ textAlign: "left" }}>
              <i class="material-icons">file_download</i>
              <a href={"https://drive.google.com/uc?export=view&id=15TUOZ8fjyTEGSEhmalWyoAkkOhsn2Dip"}>Download Catalog</a>
            </a>
          </li>
          <li>
            <a style={{ textAlign: "left" }}></a>
          </li>
          <li>
            <div class="divider"></div>
          </li>
          <li>
            <a class="subheader"></a>
          </li>
          <li>
            <a class="waves-effect" ></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
