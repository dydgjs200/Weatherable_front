'use client'; // nextjs에서 useState사용시 작성필
import React from 'react';
import Calendar from '../../components/calendarpage/calendarpage';

const CalendarPage: React.FC = () => {
  return (
    <div>
      <h1>Calendar Page</h1>
      <Calendar />
    </div>
  );
};

export default CalendarPage;
