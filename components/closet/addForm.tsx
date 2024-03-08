'use client';
import React, { useState } from 'react';
import styles from '../../styles/closet/closet.module.scss';

export default function AddForm() {
  const [isDisabled, setIsDisabled] = useState(false);

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
            disabled={isDisabled}
            onChange={addInfo}
          />
          <label htmlFor="editImgBtn">
            <span className="material-symbols-outlined">edit</span>
          </label>
        </div>
      </div>
      <label htmlFor="">제품명</label>
      <input type="text" name="" id="" />
      <label htmlFor="">브랜드</label>
      <input type="text" name="" id="" />
      <label htmlFor="">사이즈</label>
      <select name="" id="">
        <option value="">S</option>
        <option value="">M</option>
        <option value="">L</option>
        <option value="">XL</option>
      </select>

      <label htmlFor="">카테고리</label>
      <label htmlFor="">두께</label>
      <input type="button" name="" id="" value={'봄'} />

      <label htmlFor="">색</label>

      <label htmlFor="">구매가격</label>
      <input type="number" name="" id="" />
    </form>
  );
}
