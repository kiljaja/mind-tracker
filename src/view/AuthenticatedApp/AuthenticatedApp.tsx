import React, { useState, useEffect } from 'react';
import './AuthenticatedApp.scss';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import HabitOverview from '../../components/HabitOverview/HabitOverview';
import HabitEntryList from '../../components/HabitEntryList/HabitEntryList';
import { useApp } from '../../context/app-context';

// Test not included in live site
import { TestChart } from '../../components/TestChart/TestChart';

import { getAllMeditations } from '../../apis/mind-tracker-api';

export const AuthenticatedApp = () => {
  const { meditations, getAllMeditations } = useApp();
  const [meditationEntries, setMeditationEntries] = useState([]);
  const [userName, setUserName] = useState('demoUser');

  // Initial get all of all meditation entries
  useEffect(() => {
    getAllMeditations();
  }, []);

  const refreshData = () => {
    getAllMeditations();
  };

  return (
    <>
      <HeroHeader />

      <div className="weekly-overview-list">
        <h2>This weeks overview </h2>
        {/* <TestChart /> */}

        <HabitOverview
          habitEntries={meditations}
          userName={userName}
          refreshData={refreshData}
        />
      </div>

      <HabitEntryList refreshData={refreshData} habitEntries={meditations} />
    </>
  );
};
