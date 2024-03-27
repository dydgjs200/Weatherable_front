'use client';

import { useRouter } from 'next/navigation';
import MypageEditContent from '../../../../components/MyPage/MypageEditContent';
import MypageEditHeader from '../../../../components/MyPage/MypageEditHeader';
import styles from '../../../../styles/MyPage/mypageEdit.module.scss';
import { useEffect } from 'react';

function MypageEditPage() {
  // const router = useRouter();

  // useEffect(() => {
  //   const accessToken = sessionStorage.getItem('accessToken');
  //   if (!accessToken) {
  //     alert('로그인 후 이용 가능합니다.');
  //     router.push('/login');
  //   }
  // }, []);
  return (
    <>
      <div className={styles.mypageEdit_Container}>
        <MypageEditHeader />
        <div className={styles.mypageEdit_underbar}></div>
        <MypageEditContent />
      </div>
    </>
  );
}

export default MypageEditPage;
