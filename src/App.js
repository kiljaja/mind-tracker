import React, {useState, useEffect} from "react";
import "./App.css";
import HeroHeader from "./components/HeroHeader/HeroHeader";
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
      <HeroHeader />
      <HabitOverview  habitEntries={meditationEntries} userName={userName}/>
    </>
  );
}

export default App;
