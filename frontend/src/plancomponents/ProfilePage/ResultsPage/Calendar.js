import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';

function Calendar(props) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    // Ustawianie zaznaczonej daty w strefie czasowej użytkownika
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    const selectedDateUtc = new Date(date.getTime() - userTimezoneOffset);

    setSelectedDate(date);
    props.onDateChange(selectedDateUtc); // Przekazywanie zaznaczonej daty do komponentu nadrzędnego
  };

  return (
    <div className="calendar-container">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        inline
        shouldCloseOnSelect={false}
      />
    </div>
  );
}

export default Calendar;
