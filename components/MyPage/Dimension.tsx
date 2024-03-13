import Link from 'next/link';
import styles from '../../styles/MyPage/Dimension.module.scss';

function Dimension() {
  return (
    <>
      <div className={styles.gridContainer}>
        <Link href={'/dimension/top'} className={styles.gridItem}>
          <div>상의</div>
        </Link>
        <div className={styles.gridItem}>하의</div>
        <div className={styles.gridItem}>아우터</div>
        <div className={styles.gridItem}>신발</div>
      </div>
    </>
  );
}

export default Dimension;
