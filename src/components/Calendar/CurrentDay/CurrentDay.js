import React, { useContext } from "react";
import style from "./CurrentDay.module.scss";
import DateContext from "../../../contexts/DateContext";
import { format } from "date-fns";

const CurrentDay = () => {
  const date = useContext(DateContext);
  return (
    <div className={style.day}>
      <h2>{format(date, "eeee")}</h2>
      <p>{date.getDate()}</p>
    </div>
  );
};

export default CurrentDay;
