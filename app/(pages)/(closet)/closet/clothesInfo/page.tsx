'use client';

import styles from '../../../../../styles/closet/addclothes.module.scss';
import SelectBoxCrawling from '../../../../../components/closet/all_clothes/selectBoxCrawling';
import ClothesInfoBoxCrawling from '../../../../../components/closet/all_clothes/clothesInfoBoxCrawling';
import { useEffect, useState } from 'react';
import {
  getCrawlingClothes,
  searchClothesGet,
} from '../../../../../service/closetApiService';

export default function AllClothes() {
  const [crawClothes, setCrawClothes] = useState([]);
  // 크롤링 데이터 가져오기
  useEffect(() => {
    const crawlingData = async () => {
      try {
        const crawlingClothes = await getCrawlingClothes();
        setCrawClothes(crawlingClothes.slice(0, 10));
      } catch (error) {
        console.log('크롤링 데이터 실패: ', error);
      }
    };
    crawlingData();
  }, []);

  // console.log(crawClothes[0].id);

  // console.log(Object.values(crawClothes));

  const [searchData, setSearchData] = useState('');

  const searchClothes = async (e: any) => {
    e.preventDefault();
    console.log(searchData);

    const searchResult = await searchClothesGet(searchData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchInputBox}>
        <form onSubmit={searchClothes}>
          <label htmlFor="search">
            <span className="material-symbols-outlined">search</span>
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="검색어를 입력해주세요"
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
          />
        </form>
      </div>
      <div className={styles.selectBox}>
        <SelectBoxCrawling />
      </div>
      <div className={styles.mainInfoBoxDefault}>
        {crawClothes.map((clothes) => (
          <ClothesInfoBoxCrawling data={clothes} key={clothes.id} />
        ))}
      </div>
    </div>
  );
}
