import React, { Component } from "react";
import M from "materialize-css";
class About extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.getElementById("textarea2");
      M.CharacterCounter.init(elems);
    });
  }
  render() {
    return (
      <div className="container">
        <div class="row">
          <form class="col s12">
            <div className="row">
                <h3> Contact us</h3>
            </div>
            <div class="row">
              <div class="input-field col s12 m6 l6 xl6">
                <i class="material-icons prefix">account_circle</i>
                <input
                  id="icon_prefix"
                  type="text"
                  class="validate"
                  name="fullname"
                />
                <label for="icon_prefix">Full Name</label>
              </div>
              <div class="input-field col s12 m6 l6 xl6">
                <i class="material-icons prefix">email</i>
                <input
                  id="icon_telephone"
                  type="email"
                  class="validate"
                  name="mail"
                />
                <label for="icon_telephone">Email</label>
              </div>
            </div>
            <div className="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">notes</i>
                <textarea
                  id="textarea2"
                  class="materialize-textarea"
                  data-length="240"
                ></textarea>
                <label for="textarea2">Leave us a message here</label>
              </div>
            </div>
            <div className="row">
            <a class="btn-large teal darken-3"><i class="material-icons right">send</i>Send</a>
            </div>  
          </form>
        </div>
      </div>
    );
  }
}

export default About;
