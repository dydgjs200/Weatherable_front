import styles from '../styles/header.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import { usePathname } from 'next/navigation';
interface props {
  open: Boolean;
  close: () => void;
}

export default function SideBar({ open, close }: props) {
  const path = usePathname();
  console.log(path);

  const sidebarLeft = open ? '0%' : '-100%';

  return (
    <div
      className={styles.sideBarContainer}
      style={{
        opacity: open ? '1' : '0',
        left: sidebarLeft,
      }}
    >
      <div className={styles.sideBarInnerBox} style={{ left: sidebarLeft }}>
        <nav className={styles.sideBarContentBox}>
          {/* <Link href="/">
            <Image src={logo} alt="로고" onClick={close} />
          </Link> */}
          <ul className={styles.userBox}>
            <li className={styles.loginBtn}>
              <Link href="/login" onClick={close}>
                로그인
              </Link>
            </li>
            <li className={styles.registerBtn}>
              <Link href="/login" onClick={close}>
                회원가입
              </Link>
            </li>
          </ul>
          <ul className={styles.navBox}>
            <li>
              <Link href="/" onClick={close}>
                <span className="material-symbols-outlined">psychology</span>
                <span>AI 옷 추천</span>
              </Link>
            </li>
            <li className={styles.cat}>
              <span>옷장</span>
            </li>

            <li>
              <Link href={`/closet/1`} onClick={close}>
                {path == '/closet/1' && <div className={styles.path}>-</div>}
                <span className="material-symbols-outlined">apparel</span>
                옷장 보기
              </Link>
            </li>
            <li>
              <Link href={`/closet/1`} onClick={close}>
                <span className="material-symbols-outlined">star</span>
                즐겨찾기 옷장
              </Link>
            </li>
            <li className={styles.cat}>
              <span>코디</span>
            </li>
            <li>
              <Link href={'/codipage'} onClick={close}>
                {path == '/codipage' && <div className={styles.path}>-</div>}
                <span className="material-symbols-outlined">
                  deployed_code_account
                </span>
                내 코디
              </Link>
            </li>
            <li>
              <Link href="/" onClick={close}>
                <span className="material-symbols-outlined">star</span>
                즐겨찾기 코디
              </Link>
            </li>
          </ul>
          <ul className={styles.logoutBox}>
            <li>
              <span>로그아웃</span>
            </li>
          </ul>
        </nav>
      </div>
      <button onClick={close} className={styles.closeBtn}>
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
}
