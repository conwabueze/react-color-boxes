import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  static defaultProps = {
    colors: [
      "#DAF7A6",
      "#5D7E22",
      "#1D2808",
      "#A0F607",
      "#F6AA07",
      "#79560C",
      "#64477B",
      "#64477B",
      "#8B04FA",
      "#F304FA",
      "#901B7E",
      "#901B2B",
      "#FA0426",
      "#04FAE2",
      "#04B9FA",
      "#0494FA",
    ],
  };

  constructor(props) {
    super(props);

    this.state = {
      color: this.randomColorGenerator(),
    };

    this.changeColor = this.changeColor.bind(this);
  }

  randomColorGenerator() {
    return this.props.colors[
      Math.floor(Math.random() * this.props.colors.length)
    ];
  }

  changeColor() {
    let newColor = this.randomColorGenerator();
    while (newColor === this.state.color) {
      newColor = this.randomColorGenerator;
    }
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div
        className="ColorBox"
        style={{ backgroundColor: this.state.color }}
        onClick={this.changeColor}
      ></div>
    );
  }
}

export default ColorBox;
