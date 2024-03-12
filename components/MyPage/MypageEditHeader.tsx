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
          <label className={styles.label} htmlFor="file">
            <div className={styles.label_Div}>프로필 변경</div>
          </label>
          <input className={styles.input} type="file" id="file" />
        </span>
        <div className={styles.nick_Div}>
          <input className={styles.mypage_Profile_nickname} type="text" />
          <div className={styles.nick_Icon}>
            <img src="/edit.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MypageEditHeader;
