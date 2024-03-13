'use client';

import { useState } from 'react';
import styles from '../../styles/MyPage/mypageEditContent.module.scss';

function MypageEditContent() {
  // 각 스타일 요소의 상태를 관리하는 배열
  const [selectedDivs, setSelectedDivs] = useState(Array(8).fill(false));

  // 스타일 요소의 상태를 토글하는 함수
  const handleDivChange = (index) => {
    const newSelectedDivs = [...selectedDivs];
    newSelectedDivs[index] = !newSelectedDivs[index];
    setSelectedDivs(newSelectedDivs);
  };

  // 선호 스타일 배열
  const likeStyles = ['캐주얼', '미니멀', '포멀', '스포츠', '', '', '', ''];

  return (
    <>
      <div className={styles.Container}>
        {/* 선호스타일 변경 */}
        <div className={styles.title_div}>
          <img src="/bar.png" alt="" />
          <div className={styles.title}>선호스타일</div>
        </div>
        <div className={styles.like_Style_div}>
          {/* 각 선호 스타일 요소에 대해 매핑 */}
          {likeStyles.map((style, index) => (
            <div
              key={index}
              className={`${styles.like_Style} ${
                selectedDivs[index] ? styles.clicked : ''
              }`}
              onClick={() => handleDivChange(index)}
            >
              {style}
            </div>
          ))}
        </div>
        {/* 체형 정보 변경 */}
        <div className={styles.title_div}>
          <img src="/bar.png" alt="" />
          <div className={styles.title}>체형 정보</div>
        </div>
        <div className={styles.physical_Info_div}>
          {/* 키 */}
          <div className={styles.height}>
            <div className={styles.height_title}>키 (cm)</div>
            <div className={styles.height_input_div}>
              <input className={styles.height_input} type="text" readOnly />
            </div>
            <div className={styles.icon}>
              <img src="/edit.png" alt="" />
            </div>
          </div>
          <br />
          {/* 몸무게 */}
          <div className={styles.weight}>
            <div className={styles.weight_title}>몸무게 (kg)</div>
            <div className={styles.weight_input_div}>
              <input className={styles.weight_input} type="text" readOnly />
            </div>
            <div className={styles.icon}>
              <img src="/edit.png" alt="" />
            </div>
          </div>
        </div>
        {/* 아이디 변경 */}
        <div className={styles.title_div}>
          <img src="/bar.png" alt="" />
          <div className={styles.title}>아이디</div>
        </div>
        <div>
          <input className={styles.input} type="text" readOnly />
        </div>
        {/* 비밀번호 변경 */}
        <div className={styles.title_div}>
          <img src="/bar.png" alt="" />
          <div className={styles.title}>비밀번호</div>
        </div>
        <div>
          <input className={styles.input} type="text" />
        </div>
        {/* 비밀번호 변경 확인 */}
        <div className={styles.title_div}>
          <img src="/bar.png" alt="" />
          <div className={styles.title}>비밀번호 재확인</div>
        </div>
        <div>
          <input className={styles.input} type="text" />
        </div>
        {/* 저장하기 버튼 */}
        <button className={styles.Btn}>저장하기</button>
      </div>
    </>
  );
}

export default MypageEditContent;
