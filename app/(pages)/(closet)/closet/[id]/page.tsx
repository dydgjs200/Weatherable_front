'use client';

import ClothesInfoBox from '../../../../../components/closet/closet_main/clothesInfoBox';
import AddToggleBtn from '../../../../../components/closet/closet_add/addToggleBtn';
import SelectBox from '../../../../../components/closet/closet_main/selectBox';
import styles from '../../../../../styles/closet/closet.module.scss';
import SortBox from '../../../../../components/closet/closet_main/sortBox';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserClothes } from '../../../../../service/closetApiService';

export default function Closet() {
  const sortStatus = useSelector((state: any) => state.status.status);
  // console.log('sort 상태', sortStatus);

  useEffect(() => {
    const userClothesData = async () => {
      try {
        const userClothesData = await getUserClothes();
      } catch (error) {
        console.log(error, '유저 데이터 가져오기 오류');
      }
    };
    userClothesData();
  }, []);

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
        <ClothesInfoBox />
        <ClothesInfoBox />
        <ClothesInfoBox />
      </div>
      <AddToggleBtn />
    </div>
  );
}
