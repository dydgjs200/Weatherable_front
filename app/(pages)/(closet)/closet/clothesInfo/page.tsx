'use client';

import styles from '../../../../../styles/closet/addclothes.module.scss';
import SelectBoxCrawling from '../../../../../components/closet/all_clothes/selectBoxCrawling';
import ClothesInfoBoxCrawling from '../../../../../components/closet/all_clothes/clothesInfoBoxCrawling';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getCrawlingClothes,
  searchClothesGet,
  getCrawlingClothesByCat,
} from '../../../../../service/closetApiService';

export default function AllClothes() {
  const [crawClothes, setCrawClothes] = useState([]);
  // 크롤링 데이터 가져오기

  const selectCatData = useSelector((state: any) => state.search.selectData);
  // console.log('검색분류 >>', selectCatData);

  useEffect(() => {
    const crawlingData = async () => {
      try {
        const crawlingClothes = await getCrawlingClothes();
        setCrawClothes(crawlingClothes);
      } catch (error) {
        console.log(error, '크롤링 데이터 가져오기 오류 (전체)');
      }
    };
    crawlingData();
  }, []);

  // useEffect(() => {
  //   const userClothesData = async () => {
  //     if (selectCatData !== '') {
  //       try {
  //         const crawlingClothesByCat = await getCrawlingClothesByCat(
  //           selectCatData
  //         );
  //         setCrawClothes(crawlingClothesByCat);
  //       } catch (error) {
  //         console.log(error, '크롤링 데이터 가져오기 오류 (카테고리별)');
  //       }
  //     }
  //   };
  //   userClothesData();
  // }, [selectCatData]);

  // useEffect(() => {
  //   const crawlingData = async () => {
  //     try {
  //       if (selectCatData) {
  //         try {
  //           const crawlingClothesByCat = await getCrawlingClothesByCat(
  //             selectCatData
  //           );
  //           setCrawClothes(crawlingClothesByCat);
  //         } catch (error) {
  //           console.log(error, '크롤링 데이터 가져오기 오류 (카테고리별)');
  //         }
  //       } else if (selectCatData == 'All') {
  //         try {
  //           const crawlingClothes = await getCrawlingClothes();
  //           setCrawClothes(crawlingClothes);
  //         } catch (error) {
  //           console.log(error, '크롤링 데이터 가져오기 오류 (전체)');
  //         }
  //       }
  //     } catch (error) {
  //       console.log('크롤링 데이터 실패: ', error);
  //     }
  //   };
  //   crawlingData();
  // }, [selectCatData]);

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
