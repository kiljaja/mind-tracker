import React, { useState } from "react";
import {deleteMeditation} from "../../apis/mind-tracker-api";
import {updateMeditation} from "../../apis/mind-tracker-api";
import {formatStringDate} from "../../utils/helper-functions";


function HabitEntry({ name = "Meditation", entry = {}, refreshData}) {
  const [showEditPanel, setShowEditPanel] = useState(false);

  const togglePanel = () => {
    setShowEditPanel(() => {
      setShowEditPanel(!showEditPanel);
    });
  };

  const handleDelete = async ()=>{
    const {userName, id} = entry;
    const response = await deleteMeditation(userName, id);
    if (response.ok) refreshData();
    else console.log("Delete error");
  }

  const date = formatStringDate(entry.date);
  return (
    <div className="habit-entry-container">
      <div className="habit-entry">
        <h3>{name}</h3>
        <p> {date} </p>
        <div className="entry-btn-group">
          <button className="entry-btn entry-btn-update" onClick={togglePanel}>
            edit
          </button>
          <button className="entry-btn entry-btn-delete" onClick={handleDelete}>delete</button>
        </div>
      </div>
      {showEditPanel && (
        <HabitEditPanel date={date} togglePanel={togglePanel} refreshData={refreshData} entry={entry} />
      )}
    </div>
  );
}

function HabitEditPanel({ date = "2020-01-01", togglePanel, entry ={}, refreshData }) {
  const [newDate, setNewDate] = useState(date);
  const handleChange = (evt) => {
    setNewDate(evt.target.value);
  };

  const handleUpdate = async ()  => {
    togglePanel();
    const {userName, id} = entry;
    const response = await updateMeditation(userName, id, newDate);
    if (response.ok) refreshData();
    else console.log("Update error");

  };

  return (
    <div className="edit-panel">
      <label htmlFor="newDate">
        New Date
        <input
          type="date"
          name="date"
          id="newDate"
          value={newDate}
          min="2020-01-01"
          onChange={handleChange}
        />
      </label>
      <button className="entry-btn entry-btn-update" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
}

export default HabitEntry;
