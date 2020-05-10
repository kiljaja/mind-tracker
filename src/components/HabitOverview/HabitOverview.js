import React, { useState, useEffect } from "react";
import {
  getStartOfWeek,
  formatDates,
  getEndOfWeek,
  createZeroHourDate,
} from "../../utils/helper-functions";

const HabitOverview = ({ habitEntries }) => {
  const date = formatDates(createZeroHourDate("2020-05-05"));

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

  const weekEntries = getThisWeeksHabits(habitEntries);
  const weekHabitMap = getWeekHabitMap(weekEntries);
  return (
    <div>
      <h1>HabitOverview</h1>
      <h2> {date} </h2>
    </div>
  );
};

export default HabitOverview;
