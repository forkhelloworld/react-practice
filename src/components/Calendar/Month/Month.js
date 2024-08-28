import React, { useContext } from "react";
import style from "./Month.module.scss";
import {
  startOfMonth,
  getWeeksInMonth,
  getDaysInMonth,
  getDay,
  format,
  addMonths,
} from "date-fns";
import DateContext from "../../../contexts/DateContext";
import Week from "../Week/Week";

const Month = (props) => {
  let lettersList = ["S", "M", "T", "W", "T", "F", "S"];
  let letterKey = 0;
  lettersList = lettersList.map((letter) => {
    return <th key={letterKey++}>{letter}</th>;
  });

  const date = useContext(DateContext);
  const weeksCount = getWeeksInMonth(date);
  const daysInMonth = getDaysInMonth(date);
  let month = [];
  let day = 1 - getDay(startOfMonth(date));

  for (let week = 0; week <= weeksCount - 1; week++) {
    month.push([]);
    for (day; month[week].length < 7; day++) {
      if (day < 1 || day > daysInMonth) {
        month[week].push([" ", day]);
      } else {
        month[week].push([day, day]);
      }
    }
  }

  const chooseMonth = (event) => {
    const newDate = addMonths(event.target.textContent === ">" ? 1 : -1);
    props.callback(newDate);
  };

  let weeks = month.map((week) => (
    <Week
      callback={props.callback}
      key={week}
      days={week}
      currentDay={date.getDate()}
    />
  ));

  return (
    <div className={style.month}>
      <div className={style.head}>
        <button onClick={chooseMonth}>{"<"}</button>
        <h2>{format(date, "LLLL yyyy")}</h2>
        <button onClick={chooseMonth}>{">"}</button>
      </div>
      <table>
        <thead>
          <tr>{lettersList}</tr>
        </thead>
        <tbody>{weeks}</tbody>
      </table>
    </div>
  );
};

export default Month;
