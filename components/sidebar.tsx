import styles from '../styles/header.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface props {
  open: Boolean;
  close: () => void;
}

export default function SideBar({ open, close }: props) {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBarInnerBox}>
        <Link href="/">
          <img src="" alt="로고" onClick={close} />
        </Link>
        <ul>
          <li>
            <Link href="/" onClick={close}>
              AI 옷 추천
            </Link>
          </li>
          <li>
            <Link href="/closet" onClick={close}>
              내 옷장 보기
            </Link>
          </li>
          <li>
            <Link href="/" onClick={close}>
              인기 옷장
            </Link>
          </li>
          <li>
            <Link href="/" onClick={close}>
              커뮤니티
            </Link>
          </li>
        </ul>
      </div>
      <button onClick={close}>
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
}
