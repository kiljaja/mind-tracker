import React from "react";
import "./HabitOverview.css";
// TODO: abstract the logo image
import logoImg from "../../images/baby-groot-meditation.jpeg";

import {
  getStartOfWeek,
  getEndOfWeek,
  createZeroHourDate,
} from "../../utils/helper-functions";

import { addMeditation } from "../../apis/mind-tracker-api";

import WeekReport from "../WeekReport/WeekReport";

const HabitOverview = ({ habitEntries, userName }) => {
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

  const handleHabitPost = async () => {
    const response = await addMeditation(userName);
    if (response.ok) console.log("Post is success full");
    else console.log("Post error");
  };

  const weekEntries = getThisWeeksHabits(habitEntries);

  return (
    <button className="habit-overview" onClick={handleHabitPost}>
      <div className="logo-img-container">
        <img className="logo-img" src={logoImg} alt={`${name} logo`} />
      </div>
      <WeekReport weekEntries={weekEntries} name={name} />
    </button>
  );
};

export default HabitOverview;
