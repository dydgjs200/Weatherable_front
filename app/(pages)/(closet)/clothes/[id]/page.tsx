'use client';

import { useState, useEffect } from 'react';
import styles from '../../../../../styles/closet/closet.module.scss';
import clothStyles from '../../../../../styles/closet/clothes.module.scss';
import Image from 'next/image';
import {
  deleteCloth,
  getMyClosetById,
} from '../../../../../service/closetApiService';
import { useRouter } from 'next/navigation';

interface clothes {
  imagePath: string;
  productName: string;
  brand: string;
  majorCategory: string;
  middleCategory: string;
  size: string;
  season: string;
  thickness: string;
  style: string;
  price: string;
}

export default function Clothes({ params: { id } }) {
  const [clothes, setClothes] = useState<clothes>({
    imagePath: '',
    productName: '',
    brand: '',
    majorCategory: '',
    middleCategory: '',
    size: '',
    season: '',
    thickness: '',
    style: '',
    price: '',
  });

  // id 기반 옷 정보 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const crawlingClothes = await getMyClosetById(id);
        setClothes(crawlingClothes);
      } catch (error) {
        console.log('내 옷장 상세 정보가져오기 실패: ', error);
      }
    };
    fetchData();
  }, []);

  const {
    imagePath,
    productName,
    brand,
    majorCategory,
    middleCategory,
    size,
    season,
    thickness,
    style,
    price,
  } = clothes;

  // console.log(clothes);

  // 옷 정보 수정
  const changeValue = (e) => {
    const { value, name } = e.target;
    console.log(value);
    console.log(name);
    setClothes((prevClothes) => ({
      ...prevClothes,
      [name]: value,
    }));
  };

  const modifyClothes = () => {
    console.log(clothes);
  };
  const router = useRouter();

  const deleteClothes = async () => {
    try {
      const result = await deleteCloth(id);
      alert('삭제가 완료되었습니다.');
      router.back();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={clothStyles.pNameContainer}>
        <input
          type="text"
          name="productName"
          id=""
          className={clothStyles.desc}
          value={productName}
          onChange={changeValue}
        />
      </form>
      <div className={clothStyles.imgContainer}>
        {/* <Image src={} alt="로고" />; */}
        <img src={imagePath} alt="" />
      </div>
      <div className={clothStyles.infoContainer}>
        <div>
          <span className={clothStyles.title}>브랜드</span>
          <span>{brand}</span>
        </div>
        <div>
          <span className={clothStyles.title}>카테고리</span>
          <span className={clothStyles.desc}>
            {majorCategory} <span>-</span> <span>{middleCategory}</span>
          </span>
        </div>
        <div>
          <span className={clothStyles.title}>사이즈</span>
          <input
            type="text"
            name="size"
            id=""
            className={clothStyles.desc}
            value={size}
            onChange={changeValue}
          />
        </div>
        <div>
          <span className={clothStyles.title}>계절</span>
          <span className={clothStyles.desc}>{season}</span>
        </div>
        <div>
          <span className={clothStyles.title}>두께</span>
          <span className={clothStyles.desc}>{thickness}</span>
        </div>
        <div>
          <span className={clothStyles.title}>스타일</span>
          <span className={clothStyles.desc}>{style}</span>
        </div>
        <div>
          <span className={clothStyles.title}>구매가격</span>
          <input
            type="text"
            name="price"
            id=""
            className={clothStyles.desc}
            value={price}
            onChange={changeValue}
          />
        </div>
      </div>
      <div className={clothStyles.btnContainer}>
        <button onClick={modifyClothes}>수정하기</button>
        <button onClick={deleteClothes}>삭제하기</button>
      </div>
    </div>
  );
}
