import React from 'react';
import './HabitEntryList.css';

import HabitEntry from '../HabitEntry/HabitEntry';
import SkeletonHabitEntry from '../HabitEntry/SkeletonHabitEntry ';
import { useApp } from '../../context/app-context';

function HabitEntryList({ habitEntries = [], refreshData }) {
  const { isLoading } = useApp();
  const createSkeletonEntries = (num) => {
    const listOfEntries = [];
    for (let i = 0; i < num; i++) {
      listOfEntries.push(<SkeletonHabitEntry key={i} />);
    }
    return listOfEntries;
  };

  const createEntries = () => {
    return habitEntries.map((entry) => (
      <HabitEntry key={entry.id} refreshData={refreshData} entry={entry} />
    ));
  };

  const listOfEntries = isLoading ? createSkeletonEntries(20) : createEntries();

  return (
    <div className="habit-entry-list">
      <h2>Habit list</h2>
      <div className="entries-container">{listOfEntries}</div>
    </div>
  );
}

export default HabitEntryList;
