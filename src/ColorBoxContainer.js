import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./ColorBoxContainer.css";

class ColorBoxContainer extends Component {
  static defaultProps = {
    boxNumber: 16,
  };

  render() {
    return (
      <div className="ColorBoxContainer">
        {Array(this.props.boxNumber).fill(<ColorBox />)}
      </div>
    );
  }
}

export default ColorBoxContainer;
