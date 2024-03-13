'use client'; // nextjs에서 useState사용시 작성필
import React, { useState, useEffect } from 'react';
import styles from '../../styles/calendar/calendar.module.scss';

const Calendar = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 오늘 날짜를 선택한 날짜로 설정합니다.
    setSelectedDate(getFormattedDate(new Date()));
  }, []);

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

  const handleClick = (day: number) => {
    setSelectedDate(`${year}년 ${month}월 ${day}일`);
  };

  const getFormattedDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}년 ${month}월 ${day}일`;
  };

  const renderCalendar = () => {
    const totalDays = new Date(year, month, 0).getDate();
    const today = new Date();
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
        today.getDate() === day;
      const isSelected = selectedDate === `${year}년 ${month}월 ${day}일`;
      row.push(
        <td
          key={day}
          className={`${
            isToday && !selectedDate ? styles['today'] : undefined
          } ${isSelected ? styles['selectedDate'] : undefined} ${
            styles['calendar-day']
          }`}
          onClick={() => handleClick(day)}
        >
          {day}
        </td>
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

  const renderUploadButton = () => {
    const today = new Date();
    const selectedDay = selectedDate
      ? parseInt(selectedDate.split(' ')[2].replace('일', ''), 10)
      : null;

    if (selectedDay && Math.abs(selectedDay - today.getDate()) <= 1) {
      return <button onClick={upload}>등록하기</button>;
    }
    return null;
  };

  const upload = () => {
    console.log('등록하기');
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
      <div className={styles['selected-date-box']}>
        <p>선택한 날짜: {selectedDate || getFormattedDate(new Date())}</p>
        {renderUploadButton()}
      </div>
    </div>
  );
};

export default Calendar;
