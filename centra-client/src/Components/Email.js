import React, { Component } from "react";
import M from "materialize-css";
import rp from "request-promise";
import joi from "joi";
class About extends Component {
  state = {
    fullname: "",
    mail: "",
    text: "",
  };
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.getElementById("textarea2");
      M.CharacterCounter.init(elems);
    });
  }
  handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    //console.log(this.state.username)
  };

  submit = () => {
    const data = this.state;
    console.log(data);
    const schema = joi.object({
      mail: joi.string().email({ tlds: { allow: false } }), //change to 2 or 64 later
      text: joi.string().required(), //change to 64 later
      fullname: joi.string().required(),
    });

    const valid = schema.validate(data);

    if (valid.error) {
      var toastHTML = "<span>Please Enter The Right Info</span>";
      const cause = valid.error.details[0].path[0]
      if (cause === "mail") {
        toastHTML = "Please Enter a Valid Email";
      }
      if(cause === "fullname"){
        toastHTML = "Please Enter a Your Fullname";
      }
      if(cause === "text"){
        toastHTML = "Please Enter a Your Message";
      }
      console.log(valid.error.details[0].path[0]);
      M.toast({ html: toastHTML });
      return;
    }

    const requestOptions = {
      uri: "http://localhost:4000/mail",
      method: "POST",
      json: true,
      body: {
        fullname: this.state.fullname,
        mail: this.state.mail,
        text: this.state.text,
      },
    };
    rp(requestOptions)
      .then((data) => {
        if (data.error === undefined) {
          //All is good
          this.setState({ fullname: "", mail: "", text: "" });
          var toastHTML = "<span>We will be in touch soon</span>";
          M.toast({ html: toastHTML });
        } else {
          var toastHTML = "<span>Error While Sending Email</span>";
          M.toast({ html: toastHTML });
        }
      })
      .catch((err) => {
        var toastHTML = "<span>Something went wrong</span>";
        M.toast({ html: toastHTML });
      });
  };

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
                  value={this.state.fullname}
                  onChange={this.handleChange}
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
                  value={this.state.mail}
                  onChange={this.handleChange}
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
                  name="text"
                  value={this.state.text}
                  onChange={this.handleChange}
                ></textarea>
                <label for="textarea2">Leave us a message here</label>
              </div>
            </div>
            <div className="row">
              <a class="btn-large teal darken-3" onClick={this.submit}>
                <i class="material-icons right">send</i>Send
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default About;
