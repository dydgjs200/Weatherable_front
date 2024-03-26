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
            <img src="/ruler.png" alt="상의 치수 보러가기" />
            <span>상의 치수 보러가기</span>
          </div>
        </Link>
        <Link href="/dimension/bottom">
          <div className={styles.gridItem}>
            <img src="/topicon.png" alt="상의 아이콘" />
            <img src="/ruler.png" alt="하의 치수 보러가기" />
            <span>하의 치수 보러가기</span>
          </div>
        </Link>
        <Link href="/dimension/outer">
          <div className={styles.gridItem}>
            <img src="/topicon.png" alt="상의 아이콘" />
            <img src="/ruler.png" alt="아우터 치수 보러가기" />
            <span>아우터 치수 보러가기</span>
          </div>
        </Link>
        <Link href="/dimension/shoes">
          <div className={styles.gridItem}>
            <img src="/topicon.png" alt="상의 아이콘" />
            <img src="/ruler.png" alt="신발 치수 보러가기" />
            <span>신발 치수 보러가기</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Dimension;
