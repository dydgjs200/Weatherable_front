'use client';

import { useEffect, useState } from 'react';
import MypageHeader from '../../../components/MyPage/MypageHeader';
import styles from '../../../styles/MyPage/mypage.module.scss';
import PersonalInfo from '../../../components/MyPage/PersonalInfo';
import Dimension from '../../../components/MyPage/Dimension';
import Statistics from '../../../components/MyPage/Statistics';
import { useRouter } from 'next/navigation';

function MyPage() {
  const [selectedComponent, setSelectedComponent] = useState('기본정보');

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  const router = useRouter();

  useEffect(() => {
    // const accessToken = sessionStorage.getItem('accessToken');
    // if (!accessToken) {
    //   alert('로그인 후 이용 가능합니다.');
    //   router.push('/login');
    // }
  }, []);

  return (
    <>
      <div className={styles.mypage_Container}>
        <MypageHeader />
        <div className={styles.mypage_underbar}></div>
        <div className={styles.mypage_components}>
          <div
            className={`${styles.mypage_components_info} ${
              selectedComponent === '기본정보' ? styles.changedComponent : ''
            }`}
            onClick={() => handleComponentChange('기본정보')}
          >
            Info
          </div>
          <div
            className={`${styles.mypage_components_info} ${
              selectedComponent === '치수' ? styles.changedComponent : ''
            }`}
            onClick={() => handleComponentChange('치수')}
          >
            <img
              src="/ruler.png"
              alt="Ruler"
              onClick={() => handleComponentChange('치수')}
            />
          </div>
          <div
            className={`${styles.mypage_components_info} ${
              selectedComponent === '통계' ? styles.changedComponent : ''
            }`}
            onClick={() => handleComponentChange('통계')}
          >
            Report
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
