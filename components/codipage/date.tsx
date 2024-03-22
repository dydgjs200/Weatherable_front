'use client';
import React from 'react';

// 선택된 날짜를 URL에서 추출하는 함수
function extractSelectedDateFromURL() {
  // window 객체의 존재 여부 확인
  if (typeof window !== 'undefined') {
    const url = window.location.href; // 현재 페이지의 URL을 가져옴

    // URL에서 '?' 다음의 문자열을 추출
    const queryString = url.split('?')[1];
    if (!queryString) return null; // '?' 이후의 문자열이 없으면 null 반환

    // queryString을 '&' 기준으로 나누어 배열로 변환
    const queryParams = queryString.split('&');

    // queryParams에서 selectedDate 부분을 찾아 반환
    for (const param of queryParams) {
      if (param.startsWith('selectedDate=')) {
        const selectedDate = param.split('=')[1];
        return decodeURIComponent(selectedDate);
      }
    }
  }

  return null; // window 객체가 없거나 selectedDate가 없으면 null 반환
}

// 선택된 날짜를 표시하는 함수형 컴포넌트
const SelectedDateDisplay = function ({ selectedDate }) {
  // 추출된 선택된 날짜
  const extractedDate = extractSelectedDateFromURL();

  // 선택된 날짜가 있을 경우 해당 날짜를 표시, 없을 경우 추출된 날짜를 표시
  return <div>선택한 날짜: {selectedDate || extractedDate}</div>;
};

export default SelectedDateDisplay;
