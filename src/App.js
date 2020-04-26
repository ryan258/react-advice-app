import React, { Component } from "react";

import "./App.css";

export default class App extends Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    console.log("component did mount");
  }

  render() {
    return (
      <div>
        <h1>App! :D</h1>
      </div>
    );
  }
}
