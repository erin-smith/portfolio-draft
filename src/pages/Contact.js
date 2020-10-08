import React, { Component } from "react";
//import mailer from "../utils/API.js"
import "./styles.css";
import API from "../utils/API";

class Contact extends Component {

    state = {
        fullName: "",
        email: "",
        message: ""
      };

handleInputChange = event => {
  let value = event.target.value;
  const name = event.target.name;

  if (name === "name") {
      value = value.substring(0, 25);
    }

  this.setState({
      [name]: value
    })
};

validateEmail = email => {
  var emailReg = /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/;
  return emailReg.test( email );
}

handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.fullName) {
      alert(" Please fill out your full name!");
    } else if (!this.validateEmail(this.state.email)) {
      alert(`Please enter your email address ${this.state.email}`);
    } else if (!this.state.message) {
      alert(`Please enter your message`);
    } else {
      alert(`Hello ${this.state.fullName}`);
    }

    const msg = {
			fullName: this.state.fullName,
			email: this.state.email,
			message: this.state.message
		}

    // API reqest goes here:

		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://morning-citadel-34446.herokuapp.com/api/mail",
			"method": "POST",
			"data": msg
		}
		console.log(settings);
		API.sendMail(settings).then(function (response) {
			console.log(response);
		})
		alert("Thanks! We'll be in touch");

    //---------


    this.setState({
      fullName: "",
      email: "",
      message: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
        <div className="container" id="boxz">
        <div className="header p-3">
          <h4>Contact Me Here!</h4>
        </div>
        <form className="contact-form" method="post">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            value={this.state.fullName}
            id="name"
            name="fullName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Full Name"
            className="form-control"
          />
          </div>
           <div className="form-group">
           <label htmlFor="email">Email address:</label>
          <input
            value={this.state.email}
            id="email"
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="example@domain.com"
            className="form-control"
          />
          </div>
          <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange}
            type="message"
            rows="3"
            maxLength="500"
            placeholder="Message"
            className="form-control"/>
          </div>
          <input id="mail" type="submit" name="submit" className="btn btn-info active" value="Send Message" onClick={this.handleFormSubmit}/>
      </form>
      </div>
    );
  }
}

export default Contact;

