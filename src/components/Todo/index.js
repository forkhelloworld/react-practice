import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./style.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksList: [],
    };

    this.counter = 0;
  }

  addTask = (task) => {
    this.setState({
      tasksList: [...this.state.tasksList, { task: task, id: ++this.counter }],
    });
  };

  deleteItem = (id) => {
    const newTasksList = this.state.tasksList.filter((task) => {
      return task.id !== id;
    });

    this.setState({ tasksList: newTasksList });
  };

  render() {
    return (
      <div className="todo wrapper">
        <TodoForm callback={this.addTask} />
        <TodoList
          tasks={this.state.tasksList}
          deleteHandler={this.deleteItem}
        />
      </div>
    );
  }
}
