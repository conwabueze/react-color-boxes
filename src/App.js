import React, { Component } from "react";
import ColorBoxContainer from "./ColorBoxContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorBoxContainer boxNumber={30} />
      </div>
    );
  }
}

export default App;
