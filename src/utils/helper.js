import React from "react";

const dateInPast = (date, toDay = new Date()) => {
  if (new Date(date) <= toDay) {
    return true;
  }
  return false;
};

function disabledPastDate(current) {
  // Can not select days before today and today
  return (
    current && current < new Date(new Date().setDate(new Date().getDate() - 1))
  );
}

const usePrevious = (value) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value && JSON.stringify(value);
  }, [value]);
  return ref.current && JSON.parse(ref.current);
};

export { dateInPast, disabledPastDate, usePrevious };
