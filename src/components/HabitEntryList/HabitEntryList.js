import React from "react";
import "./HabitEntryList.css";

import HabitEntry from "../HabitEntry/HabitEntry";

function HabitEntryList({
  name = "Meditation",
  habitEntries = [],
  refreshData,
}) {
  const listOfEntries = habitEntries.map((entry) => (
    <HabitEntry key={entry.id} refreshData={refreshData} entry={entry} />
  ));
  const date = "2020/05/10";
  return (
    <div className="habit-entry-list">
      <h2>Habit list</h2>
      <div className="entries-container">{listOfEntries}</div>
    </div>
  );
}

export default HabitEntryList;
