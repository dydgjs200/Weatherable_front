'use client';

import { useEffect, useState } from 'react';
import styles from '../../styles/MyPage/PersonalInfo.module.scss';
import axios from 'axios';

function PersonalInfo() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = sessionStorage.getItem('accessToken');

        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_DB_HOST}/user`
        );

        const { height, weight } = response.data.data;
        setHeight(height);
        setWeight(weight);
      } catch (error) {
        console.error('유저 데이터 가져오는 도중 오류 발생', error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content_Div}>
          <div>키</div>
          <div>{height} cm</div>
        </div>
        <div className={styles.content_Div}>
          <div>몸무게</div>
          <div>{weight} kg</div>
        </div>
        <div className={styles.content_Div}>
          <div>뭐할까</div>
          <div></div>
        </div>
        <div className={styles.content_Div}>
          <div>뭐할까</div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
