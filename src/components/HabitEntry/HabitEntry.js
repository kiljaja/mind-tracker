import React, { useState } from 'react';
import { useApp } from '../../context/app-context';

import moment from 'moment';

function HabitEntry({ name = 'Meditation', entry = {}, refreshData }) {
  const [showEditPanel, setShowEditPanel] = useState(false);
  const { deleteMeditation, updateMeditation } = useApp();

  const togglePanel = () => {
    setShowEditPanel(() => {
      setShowEditPanel(!showEditPanel);
    });
  };

  const handleDelete = async () => {
    await deleteMeditation(entry.id);
    refreshData();
  };

  const date = moment(entry.postingDate).add(1, 'd').format('MM-DD-YYYY');
  return (
    <div className="habit-entry-container">
      <div className="habit-entry">
        <h3>{name}</h3>
        <div>
          <p> Points: {entry.awarenessPoints} </p>
          <p> {date} </p>
        </div>

        <div className="entry-btn-group">
          <button className="entry-btn entry-btn-update" onClick={togglePanel}>
            edit
          </button>
          <button className="entry-btn entry-btn-delete" onClick={handleDelete}>
            delete
          </button>
        </div>
      </div>
      {showEditPanel && (
        <HabitEditPanel
          date={moment(entry.postingDate).add(1, 'd').format('YYYY-MM-DD')}
          points={entry.awarenessPoints}
          togglePanel={togglePanel}
          refreshData={refreshData}
          entry={entry}
        />
      )}
    </div>
  );
}

function HabitEditPanel({
  date = '2020-01-01',
  points = 1,
  togglePanel,
  entry = {},
  refreshData,
}) {
  const [newDate, setNewDate] = useState(date);
  const [newPoints, setNewPoints] = useState(points);
  const { updateMeditation } = useApp();

  const handleDateChange = (evt) => {
    setNewDate(evt.target.value);
  };

  const handlePointsChange = (evt) => {
    setNewPoints(evt.target.value);
  };

  const handleUpdate = async () => {
    togglePanel();
    const { id } = entry;
    await updateMeditation(id, newDate, newPoints);
    refreshData();
  };

  return (
    <div className="edit-panel">
      <div className="change-inputs">
        <label htmlFor="newPoints">
          Points:
          <input
            type="number"
            name="date"
            id="newPoints"
            value={newPoints}
            min="1"
            max="200"
            onChange={handlePointsChange}
          />
        </label>
        <label htmlFor="newDate">
          New Date
          <input
            type="date"
            name="date"
            id="newDate"
            value={newDate}
            min="2020-01-01"
            onChange={handleDateChange}
          />
        </label>
      </div>
      <button className="entry-btn entry-btn-update" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
}

export default HabitEntry;
