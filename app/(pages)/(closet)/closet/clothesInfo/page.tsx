'use client';

import styles from '../../../../../styles/closet/addclothes.module.scss';
import SelectBoxCrawling from '../../../../../components/closet/all_clothes/selectBoxCrawling';
import ClothesInfoBoxCrawling from '../../../../../components/closet/all_clothes/clothesInfoBoxCrawling';
import { useEffect } from 'react';
import { getCrawlingClothes } from '../../../../../service/closetApiService';

export default function AllClothes() {
  useEffect(() => {
    const crawlingData = async () => {
      try {
        await getCrawlingClothes();
      } catch (error) {
        console.log('크롤링 데이터 실페: ', error);
      }
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.searchInputBox}>
        <label htmlFor="search">
          <span className="material-symbols-outlined">search</span>
        </label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="검색어를 입력해주세요"
        />
      </div>
      <div className={styles.selectBox}>
        <SelectBoxCrawling />
      </div>
      <div className={styles.mainInfoBoxDefault}>
        <ClothesInfoBoxCrawling />
        <ClothesInfoBoxCrawling />
      </div>
    </div>
  );
}
