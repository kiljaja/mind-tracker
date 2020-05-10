import React, {useState, useEffect} from "react";
import "./App.css";
import HabitOverview from "./components/HabitOverview/HabitOverview";

import {getAllMeditations} from "./apis/mind-tracker-api";

function App() {
  const [meditationEntries, setMeditationEntries] = useState([]);
  const [userName, setUserName] = useState("demoUser");


  // Initial get all of all meditation entries
  useEffect(() => {
    getAllMeditations(userName)
    .then(data => setMeditationEntries(data));
  }, []);

  return (
    <>
      <h1>Mind Tracker 7</h1>
      <HabitOverview  habitEntries={meditationEntries}/>
    </>
  );
}

export default App;
