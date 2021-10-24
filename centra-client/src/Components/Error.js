import React, { Component } from "react";
import M from "materialize-css";
import moment from "moment";

class Matilda extends Component {
  state = { width: -1, height: -1, slideIndex: 1, slides: [], dots: [] };



  render() {
    //Desktop Version
    return (
      <div>
          <div className="row">
          <div style={{padding: "50px"}} className="col s12 m12 l12 xl12">

        <h4>OOPS! PAGE NOT FOUND</h4>
        <h1 style={{ margin: "1rem 0 1.4rem 0", textAlign: "center", color: "#1a237e", fontWeight: "bold", fontSize: "1600%"}}>
        404</h1>
        <h5>WE ARE SORRY, BUT THE PAGE YOU <br/>REQUESTED WAS NOT FOUND!</h5>
             </div>
         </div>
      </div>
    );
  }
}

export default Matilda;
