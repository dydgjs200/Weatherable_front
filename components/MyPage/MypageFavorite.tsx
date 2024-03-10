import styles from '../../styles/MyPage/mypageFavorite.module.scss';

function MypageFavorite() {
  return (
    <>
      <div className={styles.mypage_favorite}>
        <div className={`${styles.mypage_favorite_title} ${styles.margin}`}>
          선호하는 플룻
        </div>
        <div className={`${styles.mypage_favorite_content} ${styles.margin}`}>
          {/* map 함수 써서 반복 시켜보자. */}
          <div className={styles.mypage_favorite_contentlist}>스타일1</div>
          <div className={styles.mypage_favorite_contentlist}>스타일2</div>
          <div className={styles.mypage_favorite_contentlist}>스타일3</div>
          <div className={styles.mypage_favorite_contentlist}>스타일4</div>
          <div className={styles.mypage_favorite_contentlist}>스타일5</div>
          <div className={styles.mypage_favorite_contentlist}>스타일6</div>
        </div>
      </div>
    </>
  );
}

export default MypageFavorite;
