import React, { useState, useEffect } from "react";
import "./App.css";
import HeroHeader from "./components/HeroHeader/HeroHeader";
import HabitOverview from "./components/HabitOverview/HabitOverview";
import HabitEntryList from "./components/HabitEntryList/HabitEntryList";

import { getAllMeditations } from "./apis/mind-tracker-api";

function App() {
  const [meditationEntries, setMeditationEntries] = useState([]);
  const [userName, setUserName] = useState("demoUser");

  // Initial get all of all meditation entries
  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    getAllMeditations(userName).then((data) => setMeditationEntries(data));
  };

  return (
    <>
      <HeroHeader />
      <div className="weekly-overview-list">
        <h2>This weeks overview </h2>
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
