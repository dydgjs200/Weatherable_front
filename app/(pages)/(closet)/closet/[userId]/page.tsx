'use client';

import ClothesInfoBox from '../../../../../components/closet/closet_main/clothesInfoBox';
import AddToggleBtn from '../../../../../components/closet/closet_add/addToggleBtn';
import SelectBox from '../../../../../components/closet/closet_main/selectBox';
import styles from '../../../../../styles/closet/closet.module.scss';
import SortBox from '../../../../../components/closet/closet_main/sortBox';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getUserClothes,
  getUserClothesByCat,
} from '../../../../../service/closetApiService';
import { RootState } from '../../../../../Store/Store';

interface clothes {
  brand: string;
  color: string | null;
  createdAt: string;
  id: number;
  imagePath: string;
  liked: boolean;
  majorCategory: string;
  middleCategory: string;
  nickname: string;
  price: number;
  productName: string;
  score: number;
  season: string;
  size: string;
  style: string;
  thickness: string;
  user_id: number;
  userid: string;
}

export default function Closet({ params: { userId } }) {
  const sortStatus = useSelector((state: any) => state.status.status);
  // console.log('sort 상태', sortStatus);
  const getUserId = useSelector((state: RootState) => state.user.userId);
  // console.log('userId > ', userId);
  const selectCatData = useSelector((state: any) => state.search.selectData);

  console.log('검색분류 >>', selectCatData);

  const [userClothesData, setUserClothesData] = useState<clothes[]>([]);
  //
  //
  useEffect(() => {
    const userClothesData = async () => {
      try {
        const userClothesData = await getUserClothes();
        setUserClothesData(userClothesData);
      } catch (error) {
        console.log(error, '유저 옷장 데이터 가져오기 오류 (전체) ');
      }
    };
    userClothesData();
  }, []);

  useEffect(() => {
    const userClothesData = async () => {
      if (selectCatData !== '') {
        try {
          const userClothesDataByCat = await getUserClothesByCat(selectCatData);
          setUserClothesData(userClothesDataByCat);
        } catch (error) {
          console.log(error, '유저 옷장 데이터 가져오기 오류 (카테고리)');
        }
      }
    };
    userClothesData();
  }, [selectCatData]);

  // useEffect(() => {
  //   const userClothesData = async () => {
  //     try {
  //       if (selectCatData == 'All') {
  //         try {
  //           const userClothesData = await getUserClothes();
  //           setUserClothesData(userClothesData);
  //         } catch (error) {
  //           console.log(error, '유저 옷장 데이터 가져오기 오류 (전체)');
  //         }
  //       } else if (selectCatData !== 'All') {
  //         try {
  //           const userClothesDataByCat = await getUserClothesByCat(
  //             selectCatData
  //           );
  //           setUserClothesData(userClothesDataByCat);
  //         } catch (error) {
  //           console.log(error, '유저 옷장 데이터 가져오기 오류 (카테고리별)');
  //         }
  //       }
  //     } catch (error) {
  //       console.log(error, '유저 옷장 데이터 가져오기 오류');
  //     }
  //   };
  //   userClothesData();
  // }, [selectCatData]);

  return (
    <div className={styles.container}>
      <div className={styles.innerHeader}>
        <p>
          <span>{getUserId}</span>님의 옷장
        </p>
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
        {userClothesData.map((clothes) => (
          <ClothesInfoBox key={clothes.id} clothes={clothes} />
        ))}
      </div>
      <AddToggleBtn />
    </div>
  );
}
