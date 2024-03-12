'use client'; // nextjs에서 useState사용시 작성필
import React from 'react';
import Calendar from '../../components/calendarpage/calendarpage';
import Styles from '../../styles/calendar/calendar.module.scss';
const CalendarPage: React.FC = () => {
  return (
    <div className={Styles.all}>
      <div className={Styles.h1}>
        <h1>Calendar Page</h1>
      </div>
      <Calendar />
    </div>
  );
};

export default CalendarPage;
