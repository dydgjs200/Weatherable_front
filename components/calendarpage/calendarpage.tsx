'use client';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/calendar/calendar.module.scss';
import Link from 'next/link';

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
    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    return `${yyyy}년 ${mm}월 ${dd}일`;
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
    if (selectedDate) {
      const selectedDay = parseInt(
        selectedDate.split(' ')[2].replace('일', '')
      );
      const today = new Date().getDate();

      // 선택한 날짜가 오늘 날짜 또는 내일 날짜인 경우에만 버튼을 보여줌
      if (selectedDay === today || Math.abs(selectedDay - today) <= 1) {
        const formattedDate = encodeURIComponent(selectedDate);
        console.log('인코딩값', formattedDate);
        console.log('디코딩값', decodeURIComponent(formattedDate));
        const path = `/codipage?selectedDate=${formattedDate}`;
        return (
          <a href={path}>
            <button>등록하기</button>
          </a>
        );
      }
    }
    return null;
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
