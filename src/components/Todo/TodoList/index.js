import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem";

function TodoList(props) {
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

TodoList.propTypes = {
  task: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  callback: PropTypes.func,
};

export default TodoList;
