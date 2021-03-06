import React, { Component } from "react";
import axios from "axios";

import "./App.css";

export default class App extends Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    console.log("component did mount");
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        // console.log(response.data.slip.advice);
        const { advice } = response.data.slip;
        // console.log(advice);
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h3 className="heading">{advice}</h3>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}
