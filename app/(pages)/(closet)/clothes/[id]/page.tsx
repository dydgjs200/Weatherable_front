'use client';

import { useState } from 'react';
import styles from '../../../../../styles/closet/closet.module.scss';
import clothStyles from '../../../../../styles/closet/clothes.module.scss';
import Image from 'next/image';

export default function Clothes() {
  interface clothes {
    img: string;
    productName: string;
    brandName: string;
    major_category: string;
    middle_category: string;
    size: string;
    weather: string;
    thickness: string;
    style: string;
    price: string;
  }

  const [clothes, setClothes] = useState<clothes>({
    img: '',
    productName: 'IAB 10주년 반팔 티셔츠 (Black)',
    brandName: 'IAB Studio',
    major_category: '',
    middle_category: '',
    size: 'M',
    weather: '',
    thickness: '',
    style: '',
    price: '10000',
  });

  const {
    img,
    productName,
    brandName,
    major_category,
    middle_category,
    size,
    weather,
    thickness,
    style,
    price,
  } = clothes;

  const changeValue = (e) => {
    const { value, name } = e.target;
    console.log(value);
    console.log(name);
    setClothes((prevClothes) => ({
      ...prevClothes,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={clothStyles.pNameContainer}>
        <input
          type="text"
          name="productName"
          id=""
          className={clothStyles.desc}
          value={productName}
          onChange={changeValue}
        />
      </div>
      <div className={clothStyles.imgContainer}>
        {/* <Image src={} alt="로고" />; */}
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png"
          alt=""
        />
      </div>
      <div className={clothStyles.infoContainer}>
        <div>
          <span className={clothStyles.title}>브랜드</span>
          <input
            type="text"
            name="brandName"
            id=""
            className={clothStyles.desc}
            value={brandName}
            onChange={changeValue}
          />
        </div>
        <div>
          <span className={clothStyles.title}>카테고리</span>
          {/* <span className={clothStyles.desc}>상의 </span> */}

          <select name="" id="">
            <option value="">상의</option>
            <option value="">하의</option>
            <option value="">상의</option>
          </select>

          <span>-</span>
          <span className={clothStyles.desc}>반팔 티셔츠</span>
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
          <span className={clothStyles.desc}>여름</span>
        </div>
        <div>
          <span className={clothStyles.title}>두께</span>
          <span className={clothStyles.desc}>얇음</span>
        </div>
        <div>
          <span className={clothStyles.title}>스타일</span>
          <span className={clothStyles.desc}>캐주얼</span>
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
        <button>수정하기</button>
        <button>삭제하기</button>
      </div>
    </div>
  );
}
