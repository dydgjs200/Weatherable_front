import Link from 'next/link';
import styles from '../../../styles/closet/closet.module.scss';

interface props {
  open: Boolean;
}

export default function AddToggle(open: props) {
  console.log(open);
  // const toggleHeight = open ? '15vh' : '0';
  // const toggleOpacity = open ? '1' : '0';
  return (
    <div
      className={styles.addToggle}
      // style={{ height: toggleHeight, opacity: toggleOpacity }}
    >
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
