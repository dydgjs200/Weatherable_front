'use client'; // nextjs에서 useState사용시 작성필

import React, { useState } from 'react';
import styles from '../../styles/calendar/calendar.module.scss';

const Calendar = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);

  const prevMonth = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };

  const today = (day: number, month: number) => {
    return new Date(day, month, 0).getDate();
  };
  const daysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
  };

  const renderCalendar = () => {
    const totalDays = daysInMonth(year, month);
    const today = new Date(); // 오늘 날짜를 가져옵니다.
    const firstDayOfWeek = new Date(year, month - 1, 1).getDay();
    const calendar = [];
    let row = [];

    for (let i = 0; i < firstDayOfWeek; i++) {
      row.push(<td key={`empty-${i}`} className={styles['empty-cell']} />);
    }

    for (let day = 1; day <= totalDays; day++) {
      const isToday =
        today.getFullYear() === year &&
        today.getMonth() + 1 === month &&
        today.getDate() === day; // 현재 날짜인지 확인합니다.
      row.push(
        <td key={day} className={isToday ? styles['today'] : undefined}>
          {day}
        </td> // 오늘 날짜인 경우 'today' 클래스를 추가합니다.
      );
      if ((firstDayOfWeek + day) % 7 === 0) {
        calendar.push(<tr key={day}>{row}</tr>);
        row = [];
      }
    }

    if (row.length > 0) {
      calendar.push(<tr key="last">{row}</tr>);
    }

    return calendar;
  };

  return (
    <div className={styles['calendar-container']}>
      <div className={styles['calendar-header']}>
        <div className={styles['calendar-buttons']}>
          <button onClick={prevMonth}>이전 달</button>
        </div>
        <div className={styles['calendar-title']}>
          {year}년 {month}월
        </div>
        <div className={styles['calendar-buttons']}>
          <button onClick={nextMonth}>다음 달</button>
        </div>
      </div>
      <div className={styles['calendar-body']}>
        <table>
          <thead>
            <tr>
              <th>일</th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
            </tr>
          </thead>
          <tbody>{renderCalendar()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
