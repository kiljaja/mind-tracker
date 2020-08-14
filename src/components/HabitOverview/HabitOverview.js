import React from 'react';
import './HabitOverview.css';
// TODO: abstract the logo image
import logoImg from '../../images/baby-groot-meditation.jpeg';
import moment from 'moment';
import { useApp } from '../../context/app-context';
import { addMeditation } from '../../apis/mind-tracker-api';

import WeekReport from '../WeekReport/WeekReport';
import SkeletonWeekReport from '../WeekReport/SkeletonWeekReport';

const HabitOverview = ({
  habitEntries = [],
  userName,
  refreshData,
  name = 'Meditation',
}) => {
  const { isLoading } = useApp();

  const getThisWeeksHabits = (habitEntries = []) => {
    const start = moment().startOf('isoWeek');
    const end = moment().endOf('isoWeek');
    // TODO: check back on why you add an extra day to entryData
    // Maybe the way it is being saved in that database
    const weekEntries = habitEntries.filter((entry) => {
      const entryDate = moment(entry.postingDate).add(1, 'd');
      return entryDate.isBetween(start, end, undefined, '[]');
    });

    return weekEntries;
  };

  const handleHabitPost = async () => {
    const response = await addMeditation(userName);
    if (response.ok) refreshData();
    else console.log('Post error');
  };

  const weekEntries = getThisWeeksHabits(habitEntries);

  return (
    <button className="habit-overview" onClick={handleHabitPost}>
      <div className="logo-img-container">
        <img className="logo-img" src={logoImg} alt={`${name} logo`} />
      </div>

      {isLoading ? (
        <SkeletonWeekReport weekEntries={weekEntries} name={name} />
      ) : (
        <WeekReport weekEntries={weekEntries} name={name} />
      )}
    </button>
  );
};

export default HabitOverview;
