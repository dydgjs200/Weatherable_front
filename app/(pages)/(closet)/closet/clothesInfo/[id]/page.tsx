'use client';

import { useState, useEffect } from 'react';
import styles from '../../../../../../styles/closet/closet.module.scss';
import clothStyles from '../../../../../../styles/closet/clothes.module.scss';
import Image from 'next/image';
import {
  getCrawlingClothesById,
  postAddClothes,
} from '../../../../../../service/closetApiService';

interface clothes {
  image_path: string;
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

export default function ClothesInfo({ params: { id } }) {
  const [clothes, setClothes] = useState<clothes>({
    image_path: '',
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const crawlingClothes = await getCrawlingClothesById(id);
        setClothes(crawlingClothes);
      } catch (error) {
        console.log('크롤링 옷 상세 정보 가져오기 실패: ', error);
      }
    };
    fetchData();
  }, []);

  const {
    image_path,
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

  const addCloth = async () => {
    console.log(clothes);
    try {
      await postAddClothes(clothes);
      console.log('완료');
    } catch (error) {
      console.log('옷 저장 오류', error);
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
        <img src={image_path} alt="" />
      </div>
      <div className={clothStyles.infoContainer}>
        <div>
          <span className={clothStyles.title}>브랜드</span>
          <span>{brand}</span>
        </div>
        <div>
          <span className={clothStyles.title}>카테고리</span>
          <span className={clothStyles.desc}>
            {majorCategory} <span>-</span>
            <span> {middleCategory}</span>
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
          <span className={clothStyles.desc}>
            {season == '' ? '-' : season}
          </span>
        </div>
        <div>
          <span className={clothStyles.title}>두께</span>
          <span className={clothStyles.desc}>
            {thickness == null ? '-' : thickness}
          </span>
        </div>
        <div>
          <span className={clothStyles.title}>스타일</span>
          <span className={clothStyles.desc}>
            {style == null ? '-' : style}
          </span>
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
        <button onClick={addCloth}>저장하기</button>
      </div>
    </div>
  );
}
