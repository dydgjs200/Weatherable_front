'use client';
import React from 'react';
import ClothesInfoBox from '../../components/uploadcloset/uploadClosetInfoBox'; // ClothesInfoBox 컴포넌트 import
import SelectBox from '../../components/closet/closet_main/selectBox';
import styles from '../../styles/closet/closet.module.scss';
import SortBox from '../../components/closet/closet_main/sortBox';
import { useSelector } from 'react-redux';

export default function Closet() {
  const sortStatus = useSelector((state: any) => state.status.status);
  console.log('sort 상태', sortStatus);

  return (
    <div className={styles.container}>
      <div className={styles.innerHeader}>
        <p>최진님의 옷장</p>
        <div>
          <button>
            <span className="material-symbols-outlined">bookmark</span>
          </button>
          <span>50</span>
        </div>
      </div>
      <div className={styles.selectBox}>
        <SelectBox />
      </div>
      <div className={styles.sortBox}>
        <SortBox />
      </div>
      <div
        className={
          sortStatus ? styles.mainInfoBoxDefault : styles.mainInfoBoxSmall
        }
      >
        <ClothesInfoBox />
      </div>
    </div>
  );
}
