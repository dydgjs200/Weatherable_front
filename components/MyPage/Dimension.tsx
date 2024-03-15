// Dimension 컴포넌트
import Link from 'next/link';
import styles from '../../styles/MyPage/Dimension.module.scss';

function Dimension() {
  return (
    <>
      <div className={styles.gridContainer}>
        <Link href="/dimension/top">
          <div className={styles.gridItem}>상의</div>
        </Link>
        <Link href="/dimension/bottom">
          <div className={styles.gridItem}>하의</div>
        </Link>
        <Link href="/dimension/outer">
          <div className={styles.gridItem}>아우터</div>
        </Link>
        <Link href="/dimension/shoes">
          <div className={styles.gridItem}>신발</div>
        </Link>
      </div>
    </>
  );
}

export default Dimension;
