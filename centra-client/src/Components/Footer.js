import React, { Component } from "react";
import M from "materialize-css"
import iso9001 from "../media/iso9001.jpg"
import iso3684 from "../media/iso3684.png"
import ce from "../media/ce.png"
class Footer extends Component {
  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.tooltipped');
      var instances = M.Tooltip.init(elems, {
        inDuration:50,
        exitDelay:50
      });
    });
  }
  render() {
    return (
      <footer class="page-footer blue darken-4">
        <div class="container">
          <div class="row">
            <div class="col l4">
              <h5 class="white-text" style={{textAlign:"left"}}>About:</h5>
              <p class="grey-text text-lighten-4">
                <ul style={{textAlign:"left"}}>
                  <li><p>
                  <i class="material-icons">phone_iphone</i> +20 (111) 4888898
                </p></li>
                <li><p>
                  <i class="material-icons">phone</i> +20 (2) 27429697 / 27429698
                </p></li>
                <li><p>
                  <i class="material-icons">local_printshop</i> +20 (2) 38210475
                </p></li>
                <li><p>
                  <i class="material-icons">email</i> zakishalabi@centra-egypt.com
                </p></li>
                </ul>
              </p>
            </div>
            <div class="col l4">
              <h5 class="white-text" style={{textAlign:"left"}}>Office Address:</h5>
                <ul style={{textAlign:"left"}}>
                  <li>Centra Company</li>
                  <li>Tower S 10, New Fustat City</li>
                  <li>Misr El Kadeyma, Cairo</li>
                  <li>P.O. Box 14 11632</li>
                  <li>Egypt</li>
                </ul>
             </div>
            <div class="col l4">
              <h5 class="white-text" style={{textAlign:"left"}}>Certfications</h5>
              <div style={{textAlign:"left"}}>
              <img src={ce} class="certficates tooltipped" data-tooltip="CE 0120"></img>
              <img src={iso9001} class="certficates tooltipped" data-tooltip="ISO 9001"></img>
              <img src={iso3684} class="certficates tooltipped" data-tooltip="ISO 13845"></img>
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
