import React, { Component } from "react";
import M from "materialize-css";
import moment from "moment";

class Parallax extends Component {
  state = { width: -1, height: -1, slideIndex: 1, slides: [], dots: [] };

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".modal");
      M.Modal.init(elems, {
        inDuration: 150,
        outDuration: 150,
        preventScrolling: true,
        startingTop: "7%",
        endingTop: "20%",
      });
      var instance = M.Modal.getInstance(elems[0]);

      //Check Time Of Popup
      var time = moment();
      //console.log("day is",time.date() )
      //Change to 10 and 19 later
      if (
        (time.month() === 9 || time.month() === 10) &&
        time.year() === 2021 &&
        time.date() <= 31
      ) {
        setTimeout(() => {
          instance.open();
        }, 7000);
      }
    });

    //console.log(this.state.slideIndex);
  }

  render() {
    //Desktop Version
    return (
      <div className="" >
        <div id="modal1" class="modal" style={{ overflow: "hidden" }}>
          <div class="modal-header right" style={{ marginRight: "3%" }}>
            <p>
              <i class="material-icons modal-close">close</i>
            </p>
          </div>
          <div class="modal-content">
            <img
              style={{ display: "contain" }}
              src={"https://picsum.photos/800/550"}
              alt="parallax1"
              width="90%"
              height="auto"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Parallax;
