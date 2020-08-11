import React, { useState, useEffect } from "react";
import { useAuth } from './context/auth-context';
import "./App.css";
import HeroHeader from "./components/HeroHeader/HeroHeader";
import HabitOverview from "./components/HabitOverview/HabitOverview";
import HabitEntryList from "./components/HabitEntryList/HabitEntryList";


// Test not included in live site
import {TestChart} from "./components/TestChart/TestChart";

import { getAllMeditations } from "./apis/mind-tracker-api";

const App = ()=> {
  const { isLoggedIn } = useAuth();

  const [meditationEntries, setMeditationEntries] = useState([]);
  const [userName, setUserName] = useState("demoUser");

  // Initial get all of all meditation entries
  useEffect(() => {
    getAllMeditations(userName).then((data) => setMeditationEntries(data));
  }, [userName]);

  const refreshData = () => {
    getAllMeditations(userName).then((data) => setMeditationEntries(data));
  };

  return (
    <>
      <HeroHeader />
      <div className="weekly-overview-list">
        <h2>This weeks overview </h2>
        {/* <TestChart /> */}

        <HabitOverview
          habitEntries={meditationEntries}
          userName={userName}
          refreshData={refreshData}
        />
      </div>

      <HabitEntryList
        refreshData={refreshData}
        habitEntries={meditationEntries}
      />
    </>
  );
}

export default App;
