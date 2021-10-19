import React, { Component } from "react";
import M from "materialize-css";
import logo from "../media/logo.2c8dadd5.png";
import catalouge from "../media/cata2021.pdf";
import wallpaper from '../media/centra-2.jpg'
class NavBar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".dropdown-trigger");
      var instances = M.Dropdown.init(elems, true);
    });
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, true);
    });
  }
  render() {
    return (
      <div>
        <nav>
        <a href="#" data-target="slide-out" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
          <div
            class="nav-wrapper indigo darken-4"
            style={{ paddingBottom: "20px" }}
          >
            <a href="/" class="brand-logo">
              <img
                src={logo}
                width="220px"
                height="55px"
                style={{ marginLeft: "50px" }}
              />
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a disabled 
                style={{ fontsize: "1.875em" }}>Our Products</a>
              </li>
              <li>
                <a
                 style={{ fontsize: "1.875em" }}
                 href={catalouge}>Download Catalouge</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul id="slide-out" class="sidenav">
          <li>
            <div class="user-view">
              <div class="background">
                <img src={wallpaper} width="300px" height="150px"/>
              </div>
              <a href="#">
                <img  class="" alt="" />
              </a>
              <a href="#">
                <span class="white-text name"></span>
              </a>
              <a href="#">
                <span class="white-text email"></span>
              </a>
            </div>
          </li>
          <li>
            <a href={catalouge} style={{textAlign:"left"}}>
              <i class="material-icons">file_download</i><a href={catalouge}>Download Catalouge</a>
            </a>
          </li>
          <li>
          <a style={{textAlign:"left"}}>
          <i class="material-icons">shop</i><a href="#">Our Products</a>
          </a>
          </li>
          <li>
            <div class="divider"></div>
          </li>
          <li>
            <a class="subheader"></a>
          </li>
          <li>
            <a class="waves-effect" href="#">
              
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
