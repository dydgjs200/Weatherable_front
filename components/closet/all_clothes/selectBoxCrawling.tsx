'use client';
import { useState, useEffect } from 'react';

import styles from '../../../styles/closet/addclothes.module.scss';

export default function SelectBoxCrawling() {
  const [isCat, setIsCat] = useState('All');

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const category = queryParams.get('category');
    if (category && category in categoryArr) {
      setIsCat(category);
    }
  }, []);

  const selected = (value) => {
    setIsCat(value);
    console.log(value);
  };

  const categoryArr = {
    All: [{ All: '전체' }],
    Top: [
      { Shirt: '티셔츠' },
      { Short_T_shirt: '반팔 티셔츠' },
      { Long_T_shirt: '긴팔 티셔츠' },
      { Hoodies: '후드 티셔츠' },
      { Sweat_shirt: '맨투맨' },
      { Sweater: '니트' },
    ],
    Pants: [
      { Denim: '청바지' },
      { Slacks: '슬랙스' },
      { Sport_pants: '트레이닝복' },
      { short_pants: '반바지' },
    ],
    Outer: [
      { Jacket: '자켓' },
      { Coat: '코트' },
      { Padded_jacket: '패딩' },
      { Blazer: '블레이저' },
      { Mustang: '무스탕' },
      { Sport_shirt: '스포츠 자켓' },
    ],
    Shoes: [
      { Running_shoes: '러닝 슈즈' },
      { Dress_Shoes: '구두' },
      { Sneakers: '스니커즈' },
      { Boots: '부츠' },
    ],
    Skirt: [{ Short_Skirt: '숏 스커트' }, { Long_Skirt: '롱 스커트' }],
    Onepiece: [{ Short_Onepiece: '숏 원피스' }, { Long_Onepiece: '롱 원피스' }],
    Accessory: [
      { Watch: '시계' },
      { Jewelry: '주얼리' },
      { Eyewear: '안경' },
      { Headwear: '모자' },
      { Bag: '가방' },
    ],
  };

  return (
    <>
      <ul className={styles.selectUl}>
        {Object.keys(categoryArr).map((cat, index) => (
          <li key={index}>
            <input
              type="button"
              value={cat}
              className={styles.bigCat}
              onClick={() => {
                selected(cat);
              }}
            />
          </li>
        ))}
      </ul>
      <ul className={styles.selectUl}>
        {Object.keys(categoryArr[isCat]).map((index) => (
          <li key={index}>
            <input
              type="button"
              className={styles.smallCat}
              value={Object.keys(categoryArr[isCat][index])[0]}
            />
          </li>
        ))}
      </ul>
    </>
  );
}