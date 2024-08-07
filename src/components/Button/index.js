import React, { Component } from "react";
import Square from "../../Square.index";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { f: false };
  }
  clickHandler = () => {
    this.setState({ f: !this.state.f });
  };

  render() {
    const lampState = this.state.f ? <Square /> : null;
    return (
      <>
        <button onClick={this.clickHandler}>X{lampState}</button>
      </>
    );
  }
}

export default Button;
