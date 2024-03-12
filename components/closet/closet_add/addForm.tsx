'use client';
import React, { useState } from 'react';
import styles from '../../../styles/closet/closet.module.scss';
import SelectCat from './selectBoxes/selectCat';
import SelectSize from './selectBoxes/selectSize';
import SelectColor from './selectBoxes/selectColor';

export default function AddForm() {
  const [formData, setFormData] = React.useState({
    big_img: '',
  });

  const addInfo = (e) => {
    // 이름
    console.log(e.target.value);
  };
  return (
    <form action="" className={styles.addForm}>
      <div className={styles.imgBox}>
        <img src={formData.big_img} alt="" />
        <div className={styles.editBtn}>
          <input
            type="file"
            name="editImgBtn"
            id="editImgBtn"
            className=""
            disabled
            onChange={addInfo}
          />
          <label htmlFor="editImgBtn">
            <span className="material-symbols-outlined">edit</span>
          </label>
        </div>
      </div>
      <div className={styles.infoBox}>
        <label htmlFor="">제품명</label>
        <input type="text" name="" id="" />
        <label htmlFor="">브랜드</label>
        <input type="text" name="" id="" />
        <label htmlFor="">카테고리</label>
        <SelectCat />
        <label htmlFor="">사이즈</label>
        <SelectSize />

        <label htmlFor="">두께</label>
        <div className={styles.thicknessBox}>
          <input type="button" name="" id="" value={'봄'} />
          <input type="button" name="" id="" value={'여름'} />
          <input type="button" name="" id="" value={'가을'} />
          <input type="button" name="" id="" value={'겨울'} />
        </div>

        <label htmlFor="">색</label>
        <SelectColor />
        <label htmlFor="">구매가격</label>
        <input type="number" name="" id="" />
      </div>
      <div>
        <button>저장하기</button>
        <button>임시저장하기</button>
      </div>
    </form>
  );
}
