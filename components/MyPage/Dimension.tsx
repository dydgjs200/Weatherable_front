// Dimension 컴포넌트
import Link from 'next/link';
import styles from '../../styles/MyPage/Dimension.module.scss';

function Dimension() {
  return (
    <>
      <div className={styles.gridContainer}>
        <Link href="/dimension/top">
          <div className={styles.gridItem}>
            <img src="/topicon.png" alt="상의 아이콘" />
            <span>상의 Size</span>
            <span>보러 가기</span>
          </div>
        </Link>
        <Link href="/dimension/bottom">
          <div className={styles.gridItem}>
            <img src="/bottomicon.png" alt="상의 아이콘" />
            <span>하의 Size</span>
            <span>보러 가기</span>
          </div>
        </Link>
        <Link href="/dimension/outer">
          <div className={styles.gridItem}>
            <img src="/outericon.png" alt="상의 아이콘" />
            <span>아우터 Size</span>
            <span>보러 가기</span>
          </div>
        </Link>
        <Link href="/dimension/shoes">
          <div className={styles.gridItem}>
            <img src="/shoesicon.png" alt="상의 아이콘" />
            <span>신발 Size</span>
            <span>보러 가기</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Dimension;
