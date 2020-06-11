import React from 'react';
import './WeekReport.css';
import Skeleton from 'react-loading-skeleton';

function SkeletonWeekReport({ weekEntries = [], name = 'habit' }) {
  return (
    <div className="week-report">
      <div className="left-report">
        <h1>{name}</h1>
        <div className="day-dot-list">
          <Skeleton
            style={{ height: '2em', width: '100%', maxWidth: '200px' }}
          />
        </div>
        <p className="report-text">
          {' '}
          <Skeleton
            style={{ height: '1em', width: '20px', maxWidth: '50px' }}
          />
        </p>
      </div>

      <div className="right-report">
        <p>
          <Skeleton
            style={{ height: '1em', width: '20px', maxWidth: '50px' }}
          />
        </p>
        <p>
          <Skeleton
            style={{ height: '1em', width: '100%', maxWidth: '200px' }}
          />
        </p>
      </div>
    </div>
  );
}

export default SkeletonWeekReport;
