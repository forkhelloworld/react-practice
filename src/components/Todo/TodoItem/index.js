import React from "react";
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
