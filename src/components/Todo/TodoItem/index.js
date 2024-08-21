import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export default function TodoItem(props) {
  const buttonCallback = () => {
    props.callback(props.id);
  };
  return (
    <li>
      {props.task}
      <button onClick={buttonCallback}>X</button>
    </li>
  );
}

TodoItem.propTypes = {
  task: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  callback: PropTypes.func,
};
