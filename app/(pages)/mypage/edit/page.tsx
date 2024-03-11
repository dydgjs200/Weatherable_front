import MypageEditContent from '../../../../components/MyPage/MypageEditContent';
import MypageEditHeader from '../../../../components/MyPage/MypageEditHeader';
import styles from '../../../../styles/MyPage/mypageEdit.module.scss';

function MypageEditPage() {
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
