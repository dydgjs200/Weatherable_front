'use client';

import LocationWeather from './MapPage';
import Mainpage_button from '../../components/mainpage/Mainpage_button';
import styles from '../../styles/mainpage/mainpage.module.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { hideBackButton } from '../../Store/mainSlice/mainPageSlice';
import { useDispatch } from 'react-redux';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    // const accessToken = sessionStorage.getItem('accessToken');
    // if (!accessToken) {
    //   alert('로그인 후 이용 가능합니다.');
    //   router.push('/login');
    // }
    dispatch(hideBackButton());
  }, [dispatch]);

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

export default MainPage;
