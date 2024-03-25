'use client';

import { useEffect, useState } from 'react';
import styles from '../../styles/MyPage/PersonalInfo.module.scss';
import axios from 'axios';
import { Token } from '../../service/common';

function PersonalInfo() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);

  const fetchUserData = async () => {
    try {
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

  useEffect(() => {
    Token();
    fetchUserData();
  }, []);
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.label}>키</div>
            <div className={styles.value}>{height} cm</div>
          </div>
          <div className={styles.imgDiv}>
            <img src="/height.png" alt="Height" className={styles.image} />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.label}>몸무게</div>
            <div className={styles.value}>{weight} kg</div>
          </div>
          <div className={styles.imgDiv}>
            <img src="/weight.png" alt="Weight" className={styles.image} />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.label}>성별</div>
            <div className={styles.value}>여성</div>
          </div>
          <div className={styles.imgDiv}>
            {/* <img src="/gender.png" alt="Gender" className={styles.image} /> */}
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.label}>나이</div>
            <div className={styles.value}>25세</div>
          </div>
          <div className={styles.imgDiv}>
            {/* <img src="/age.png" alt="Age" className={styles.image} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
