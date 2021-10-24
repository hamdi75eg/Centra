import React, { Component } from "react";
import M from "materialize-css";
import moment from "moment";

class Parallax extends Component {
  state = { width: -1, height: -1, slideIndex: 1, slides: [], dots: [] };

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".modal");
      var instances = M.Modal.init(elems, {
        inDuration: 150,
        outDuration: 150,
        preventScrolling: true,
      });
      var instance = M.Modal.getInstance(elems[0]);

      //Check Time Of Popup
      var time = moment();
      //console.log("day is",time.date() )
      //Change to 10 and 19 later
      if (time.month() === 9 && time.year() === 2021 && time.date() <= 31) {
        setTimeout(() => {
          instance.open();
        }, 5000);
      }
    });

    //console.log(this.state.slideIndex);
  }

  render() {
    //Desktop Version
    return (
      <div className="">
        <div id="modal1" class="modal">
          <div class="modal-content">
            <img
              style={{ display: "contain" }}
              src={
                "https://drive.google.com/uc?export=view&id=1ppByp1WPgJwSrXHqIN5nMiuHAp0ReoET"
              }
              alt="parallax1"
              width="100%"
              height="auto"
            />
          </div>
          <div class="modal-footer center">
            <a class="modal-close waves-effect waves-green btn-flat">Dismiss</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Parallax;
