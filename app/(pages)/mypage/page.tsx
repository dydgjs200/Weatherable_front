import MypageContent from '../../../components/MyPage/MypageContent';
import MypageFavorite from '../../../components/MyPage/MypageFavorite';
import MypageHeader from '../../../components/MyPage/MypageHeader';
import styles from '../../../styles/MyPage/mypage.module.scss';

function MyPage() {
  return (
    <>
      <div className={styles.mypage_Container}>
        <MypageHeader />
        <MypageFavorite />
        <div className={styles.mypage_underbar}></div>
        <div className={styles.mypage_components}>
          <div className={styles.mypage_components_info}>개인정보</div>
        </div>
        <MypageContent />
      </div>
    </>
  );
}

export default MyPage;
