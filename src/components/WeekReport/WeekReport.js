import React from "react";
import "./WeekReport.css";

import {
  createZeroHourDate,
} from "../../utils/helper-functions";

function WeekReport({ weekEntries = [], name = "habit" }) {
  // get this weeks habit map with a counter for days at least one entry was made
  const getWeekHabitMap = (weekEntries = []) => {
    const weekHabitMap = {
      count: 0,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    };

    weekEntries.forEach((entry) => {
      const date = createZeroHourDate(entry.date);
      const day = date.getUTCDay();

      switch (day) {
        case 0:
          if (!weekHabitMap.sunday) {
            weekHabitMap.sunday = true;
            weekHabitMap.count++;
          }
          break;
        case 1:
          if (!weekHabitMap.monday) {
            weekHabitMap.monday = true;
            weekHabitMap.count++;
          }
          break;
        case 2:
          if (!weekHabitMap.tuesday) {
            weekHabitMap.tuesday = true;
            weekHabitMap.count++;
          }
          break;
        case 3:
          if (!weekHabitMap.wednesday) {
            weekHabitMap.wednesday = true;
            weekHabitMap.count++;
          }
          break;
        case 4:
          if (!weekHabitMap.thursday) {
            weekHabitMap.thursday = true;
            weekHabitMap.count++;
          }
          break;
        case 5:
          if (!weekHabitMap.friday) {
            weekHabitMap.friday = true;
            weekHabitMap.count++;
          }
          break;
        case 6:
          if (!weekHabitMap.saturday) {
            weekHabitMap.saturday = true;
            weekHabitMap.count++;
          }
          break;
        default:
      }
    });

    return weekHabitMap;
  };

  const {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
    count,
  } = getWeekHabitMap(weekEntries);

  return (
    <div className="week-report">
      <div className="left-report">
        <h1>{name}</h1>
        <div className="day-dot-list">
          <DayDot isGreen={monday} />
          <DayDot isGreen={tuesday} />
          <DayDot isGreen={wednesday} />
          <DayDot isGreen={thursday} />
          <DayDot isGreen={friday} />
          <DayDot isGreen={saturday} />
          <DayDot isGreen={sunday} />
        </div>
        <p className="report-text"> {`${count}/7`}</p>
      </div>

      <div className="right-report">
        <p>Total</p>
        <p>{weekEntries.length}</p>
      </div>
    </div>
  );
}

const DayDot = ({ isGreen = false }) => {
  return (
    <span className={`day-dot  ${isGreen ? "day-dot-filled" : ""} `}></span>
  );
};

export default WeekReport;
