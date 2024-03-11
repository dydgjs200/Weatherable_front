'use client';

import { useState } from 'react';
import MypageFavorite from '../../../components/MyPage/MypageFavorite';
import MypageHeader from '../../../components/MyPage/MypageHeader';
import styles from '../../../styles/MyPage/mypage.module.scss';
import PersonalInfo from '../../../components/MyPage/PersonalInfo';
import Dimension from '../../../components/MyPage/Dimension';
import Statistics from '../../../components/MyPage/Statistics';

function MyPage() {
  const [selectedComponent, setSelectedComponent] = useState('기본정보');

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  return (
    <>
      <div className={styles.mypage_Container}>
        <MypageHeader />
        <MypageFavorite />
        <div className={styles.mypage_underbar}></div>
        <div className={styles.mypage_components}>
          <div
            className={`${styles.mypage_components_info} ${
              selectedComponent === '기본정보' ? styles.changedComponent : ''
            }`}
            onClick={() => handleComponentChange('기본정보')}
          >
            기본정보
          </div>
          <div
            className={`${styles.mypage_components_info} ${
              selectedComponent === '치수' ? styles.changedComponent : ''
            }`}
            onClick={() => handleComponentChange('치수')}
          >
            치수
          </div>
          <div
            className={`${styles.mypage_components_info} ${
              selectedComponent === '통계' ? styles.changedComponent : ''
            }`}
            onClick={() => handleComponentChange('통계')}
          >
            통계
          </div>
        </div>
        {selectedComponent === '기본정보' && <PersonalInfo />}
        {selectedComponent === '치수' && <Dimension />}
        {selectedComponent === '통계' && <Statistics />}
      </div>
    </>
  );
}

export default MyPage;
