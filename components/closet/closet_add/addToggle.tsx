import Link from 'next/link';
import styles from '../../../styles/closet/closet.module.scss';

export default function AddToggle() {
  return (
    <div className={styles.addToggle}>
      <ul>
        <li>
          <Link href="/closet/clothesInfo">제품 선택하기</Link>
        </li>
        <li>
          <Link href="/closet/1/addclothes">직접 올리기</Link>
        </li>
      </ul>
    </div>
  );
}
