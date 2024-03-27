'use client';

import LocationWeather from './MapPage';
import Mainpage_button from '../../components/mainpage/Mainpage_button';
import styles from '../../styles/mainpage/mainpage.module.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const MyPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    if (!accessToken) {
      // 세션 스토리지에 accessToken이 존재하지 않으면 로그인 페이지로 이동
      router.push('/login');
    }
  }, []);
  return (
    <div className={styles.all}>
      <hr />
      <div className={styles.maincontainer}>
        <div className={styles.test}>
          <LocationWeather />
        </div>

        <div className={styles.mainbuttoncontainer}>
          <Mainpage_button />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
