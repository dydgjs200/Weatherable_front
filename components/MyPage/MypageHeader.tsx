import styles from '../../styles/MyPage/mypageHeader.module.scss';

function MypageHeader() {
  return (
    <>
      <div className={styles.mypage_Header}>
        <div className={`${styles.mypage_Profile_edit} ${styles.margin}`}>
          편집
        </div>
        <div className={`${styles.mypage_Profile_image} ${styles.margin}`}>
          안녕
        </div>
        <div className={`${styles.mypage_Profile_nickname} ${styles.margin}`}>
          닉네임
        </div>
      </div>
    </>
  );
}

export default MypageHeader;
