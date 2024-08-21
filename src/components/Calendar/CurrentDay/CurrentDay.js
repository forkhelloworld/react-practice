import React, { useContext } from "react";
import style from "./CurrentDay.module.scss";
import DateContext from "../../../contexts/DateContext";

const CurrentDay = () => {
  const day = useContext(DateContext).getDate();
  return (
    <div className={style.day}>
      <h2>Понеділок</h2>
      <p>{day}</p>
    </div>
  );
};

export default CurrentDay;
