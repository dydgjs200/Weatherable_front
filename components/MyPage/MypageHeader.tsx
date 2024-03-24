'use client';

import Link from 'next/link';
import styles from '../../styles/MyPage/mypageHeader.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MypageHeader() {
  const [nickname, setNickname] = useState('');

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

        setNickname(response.data.data.nickname);
      } catch (error) {
        console.error('유저 데이터 가져오는 도중 오류 발생', error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <>
      <div className={styles.mypage_Header}>
        <Link
          href={'/mypage/edit'}
          className={`${styles.mypage_Profile_edit} ${styles.margin}`}
        >
          <div>
            <img src="/edit.png" alt="" />
          </div>
        </Link>
        <div
          className={`${styles.mypage_Profile_image} ${styles.margin}`}
        ></div>
        <div className={`${styles.mypage_Profile_nickname} ${styles.margin}`}>
          {nickname}
        </div>
      </div>
    </>
  );
}

export default MypageHeader;
