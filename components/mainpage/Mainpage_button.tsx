import Link from 'next/link';
import styles from '../../styles/mainpage/mainpage.module.scss';

export default function Mainpagebutton() {
  return (
    <>
      <div className={styles.mainpage__TopButton}>
        <Link href={{ pathname: '../closet/1', query: { category: 'Top' } }}>
          <div className={styles.Tshirt}></div>
        </Link>
        <Link href={{ pathname: '../closet/1', query: { category: 'Pants' } }}>
          <button className={styles.Pants}></button>
        </Link>
        <Link href={{ pathname: '../closet/1', query: { category: 'Outer' } }}>
          <button className={styles.Outer}></button>
        </Link>
      </div>
      <div className={styles.mainpage__BottomButton}>
        <button className={styles.Ai}></button>
        <Link href={{ pathname: '../codipage' }}>
          <button className={styles.Report}></button>
        </Link>
      </div>
    </>
  );
}
