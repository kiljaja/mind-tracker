import React, { useState, useEffect } from "react";
import "./HabitOverview.css";
// TODO: abstract the logo image
import logoImg from "../../images/baby-groot-meditation.jpeg";

import {
  getStartOfWeek,
  formatDates,
  getEndOfWeek,
  createZeroHourDate,
} from "../../utils/helper-functions";

import WeekReport from "../WeekReport/WeekReport";

const HabitOverview = ({ habitEntries }) => {
  //temp value
  const name = "Meditation";


  // Get the habits that fall within this current week Monday-Sunday
  const getThisWeeksHabits = (habitEntries = []) => {
    const start = getStartOfWeek();
    const end = getEndOfWeek();

    const weekEntries = habitEntries.filter((entry) => {
      const entryDate = createZeroHourDate(entry.date);
      return (
        entryDate.getTime() >= start.getTime() &&
        entryDate.getTime() <= end.getTime()
      );
    });

    return weekEntries;
  };

  const weekEntries = getThisWeeksHabits(habitEntries);
  
  return (
    <button className="habit-overview">
      <div className="logo-img-container">
        <img className="logo-img" src={logoImg} alt={`${name} logo`}/>
      </div>
      < WeekReport weekEntries={weekEntries} name={name}/>
    </button>
  );
};

export default HabitOverview;
