'use client';

import React, { useEffect, useState } from 'react';
import styles from '../../../../styles/closet/addform.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMajorCategory,
  selectMiddleCategory,
} from '../../../../Store/closetSlice/addClothesSlice';
import { postAddStyles } from '../../../../service/closetApiService';

export default function SelectCat() {
  const categoryArr = {
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
      { Short_pants: '반바지' },
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

  interface aiData {
    img: string;
  }

  const dispatch = useDispatch();

  const [category, setCategory] = useState('Top');
  const [subCategory, setSubCategory] = useState('');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSubCategoryDropdownOpen, setIsSubCategoryDropdownOpen] =
    useState(false);
  const [categoryInfo, setCategoryInfo] = useState([]);

  const selectCategory = (category) => {
    setCategory(category);
    setIsCategoryDropdownOpen(false);
    setIsSubCategoryDropdownOpen(true);
    setSubCategory('');
    setCategoryInfo(categoryArr[category]);
    dispatch(selectMajorCategory({ value: category }));
  };

  const selectSubCategory = (subcategory) => {
    setSubCategory(subcategory);
    setIsSubCategoryDropdownOpen(false);
    dispatch(selectMiddleCategory({ value: subcategory }));
  };

  // ai용 데이터 (파이썬)
  const aiData: aiData = useSelector((state: any) => ({
    img: state.clothes.clothes.small_img,
  }));

  console.log(category);
  console.log(aiData.img);
  // console.log(aiData);

  const formData = {
    [category]: aiData.img,
  };

  useEffect(() => {
    const postStyles = async () => {
      try {
        if (aiData && category) {
          const formData = { [category]: aiData };
          await postAddStyles(formData);
          console.log(formData);
        }
      } catch (error) {
        console.error('실패: ', error);
      }
    };
    postStyles();
  }, [aiData, category]);

  // const formData = new FormData();
  // formData.append(category, aiData.img);
  // console.log(formData);

  return (
    <>
      <label htmlFor="">카테고리</label>
      <div className={styles.catContainer}>
        <section className={styles.catBox}>
          <button
            className={styles.sizeBtn}
            onClick={(e) => {
              setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
              e.preventDefault();
            }}
          >
            <span>{category}</span>
            <span className="material-symbols-outlined">
              keyboard_arrow_down
            </span>
          </button>
          {isCategoryDropdownOpen && (
            <section className={styles.sizeSelectBox2}>
              <ul>
                {Object.keys(categoryArr).map((cat, index) => (
                  <li key={index}>
                    <input
                      type="button"
                      value={cat}
                      onClick={() => {
                        selectCategory(cat);
                        postAddStyles(formData);
                      }}
                    />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>

        <section className={styles.catBox}>
          <button
            className={styles.sizeBtn}
            onClick={(e) => {
              setIsSubCategoryDropdownOpen(!isSubCategoryDropdownOpen);
              e.preventDefault();
            }}
            disabled={!subCategory}
          >
            <span>{subCategory || `${subCategory}`}</span>
            <span className="material-symbols-outlined">
              keyboard_arrow_down
            </span>
          </button>
          {isSubCategoryDropdownOpen && (
            <section className={styles.sizeSelectBox2}>
              <ul>
                {categoryInfo.map((item, index) => (
                  <li key={index}>
                    <input
                      type="button"
                      value={`${item[Object.keys(item)[0]]}`}
                      onClick={() => {
                        selectSubCategory(Object.keys(item)[0]);
                      }}
                    />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>
      </div>
    </>
  );
}
