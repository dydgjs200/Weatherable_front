import Link from 'next/link';
import styles from '../../styles/MyPage/mypageEditHeader.module.scss';

function MypageEditHeader() {
  return (
    <>
      <div className={styles.mypageEdit_Header}>
        {/* <Link
          href={'/mypage'}
          className={`${styles.mypageEdit_Profile_edit} ${styles.margin}`}
        >
          <div>완료</div>
        </Link> */}
        <div
          className={`${styles.mypage_Profile_image} ${styles.margin}`}
        ></div>
        <span>
          <input type="file" />
        </span>
        <div className={`${styles.mypage_Profile_nickname} ${styles.margin}`}>
          닉네임
        </div>
      </div>
    </>
  );
}

export default MypageEditHeader;
