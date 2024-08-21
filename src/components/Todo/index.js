import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styles from "./style.module.scss";

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
      <div className={styles["todo-page"]}>
        <h1>The Best Todo List</h1>
        <div className={styles.wrapper}>
          <TodoForm callback={this.addTask} />
          <TodoList
            tasks={this.state.tasksList}
            deleteHandler={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}
