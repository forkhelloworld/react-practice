import React, { Component } from "react";
import "./style.css";

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  addTask = (event) => {
    event.preventDefault();

    if (!this.state.value) {
      return;
    }

    this.props.callback(this.state.value);
    this.setState({ value: "" });
  };

  changeInput = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.changeInput}
        ></input>
        <button onClick={this.addTask}>+</button>
      </form>
    );
  }
}
