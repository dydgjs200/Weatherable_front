'use client';

import React, { useState } from 'react';
import styles from '../styles/header.module.scss';
import '../styles/icons.scss';
import { Span } from 'next/dist/trace';
import SideBar from './sidebar';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const close = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {/* {isOpen ? (
              <span className="material-symbols-outlined">close</span>
            ) : (
            
            )} */}
            <span className="material-symbols-outlined">menu</span>
          </button>
        </li>
        <li>
          <Link href="/">
            <img src="" alt="로고" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <span className="material-symbols-outlined">login</span>
          </Link>
        </li>
      </ul>
      {isOpen && <SideBar open={isOpen} close={close} />}
    </div>
  );
}
