import React, { Component } from "react";
import Square from "../Square.index";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { f: false };
  }
  clickHandler = () => {
    this.setState({ f: !this.state.f });
  };

  render() {
    return (
      <>
        <button onClick={this.clickHandler}>
          X{this.state.f ? <Square /> : null}
        </button>
      </>
    );
  }
}

export default Button;
