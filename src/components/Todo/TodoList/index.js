import React from "react";
import TodoItem from "../TodoItem";

export default function TodoList(props) {
  let tasks = props.tasks.map((task) => {
    return (
      <TodoItem
        callback={props.deleteHandler}
        task={task.task}
        key={task.id}
        id={task.id}
      />
    );
  });
  return (
    <section>
      <ul>{tasks}</ul>
    </section>
  );
}
