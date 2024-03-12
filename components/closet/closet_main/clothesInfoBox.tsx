import styles from '../../../styles/closet/closet.module.scss';
import Link from 'next/link';

export default function ClothesInfoBox() {
  return (
    <div className={styles.infoSmallBox}>
      <Link href="/closet/1">
        <div>
          <span>제품명</span>
          <span className="material-symbols-outlined">favorite</span>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png"
          alt=""
        />
      </Link>
    </div>
  );
}