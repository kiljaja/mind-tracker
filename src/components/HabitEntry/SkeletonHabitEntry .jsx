import React from 'react';
import Skeleton from 'react-loading-skeleton';

function SkeletonHabitEntry() {
  return (
    <div  width="80%" style={{ marginBottom:"10px" }}>
      <Skeleton style={{ height: '50px', minWidth: '10px', width: '80%' }} />
    </div>
  );
}

export default SkeletonHabitEntry;
