import Link from 'next/link';
import styles from '../../styles/MyPage/mypageHeader.module.scss';

function MypageHeader() {
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
          닉네임
        </div>
      </div>
    </>
  );
}

export default MypageHeader;
