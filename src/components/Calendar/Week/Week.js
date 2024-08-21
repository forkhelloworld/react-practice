import React, { useContext } from "react";
import styles from "../Month/Month.module.scss";
import DateContext from "../../../contexts/DateContext";
import { setDate } from "date-fns";

const Week = (props) => {
  const date = useContext(DateContext);
  const dateCallback = (event) => {
    const newDate = setDate(date, +event.target.textContent);
    props.callback(newDate);
  };
  const days = props.days.map(([day, key]) => {
    let callback = day !== " " ? dateCallback : undefined;
    return (
      <td
        onClick={callback}
        key={key}
        className={day === props.currentDay ? styles.today : ""}
      >
        {day}
      </td>
    );
  });
  return <tr>{days}</tr>;
};

export default Week;
