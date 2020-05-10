// find start of the week
const getStartOfWeek = () => {
  const date = new Date();
  zeroHourADate(date);
  const diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
};

// find end of the week
const getEndOfWeek = ()=>{
  let date = getStartOfWeek();
  date.setDate( date.getDate() + 6);
  return date;
}

// Set a date to zero hour
const zeroHourADate = (date) =>{
  date.setHours(0,0,0,0);
};

// Create a date with hour set to 0
const createZeroHourDate = (date = "") =>{
  const [year, month, day] = date.split("-");
  // Subtracted on 1 from month to line up with current time
  // Not sure why javascript behaves this way
  const newDate = new Date(year, month-1, day);
  return newDate;
};

// Format date to string with a mm/dd/yyyy format
const formatDates = (date) =>{
  // Added  1 to month to line up with current time
  // Not sure why javascript behaves this way
  let month = date.getMonth() + 1;
  month = month.toString().padStart(2, "0");
  let day = date.getDate();
  day = day.toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

export {getStartOfWeek, formatDates, createZeroHourDate, getEndOfWeek};
