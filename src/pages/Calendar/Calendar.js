import React, { useState } from "react";
import style from "./Calendar.module.css";
import Month from "../../components/Calendar/Month/Month";
import DateContext from "../../contexts/DateContext";
import CurrentDay from "../../components/Calendar/CurrentDay/CurrentDay";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const chooseDayCallback = (newDate) => {
    setDate(newDate);
  };
  return (
    <DateContext.Provider value={date}>
      <div className={style.calendar}>
        <CurrentDay />
        <Month callback={chooseDayCallback} />
      </div>
    </DateContext.Provider>
  );
};

export default Calendar;
