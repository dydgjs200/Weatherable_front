import MypageFavorite from '../../../components/MyPage/MypageFavorite';
import MypageHeader from '../../../components/MyPage/MypageHeader';
import styles from '../../../styles/MyPage/mypage.module.scss';

function MyPage() {
  return (
    <>
      <div className={styles.mypage_Container}>
        <MypageHeader />
        <MypageFavorite />
      </div>
    </>
  );
}

export default MyPage;
