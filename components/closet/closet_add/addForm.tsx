'use client';
import React, { useState } from 'react';
import styles from '../../../styles/closet/addform.module.scss';
import SelectCat from './selectBoxes/selectCat';
import SelectSize from './selectBoxes/selectSize';
import SelectColor from './selectBoxes/selectColor';
import SelectThickness from './selectBoxes/selectThickness';
import SelectWeather from './selectBoxes/selectWeather';

export default function AddForm() {
  const [formData, setFormData] = React.useState({
    big_img: '',
  });

  const [imgPreview, setImgPreview] = useState(null);
  const addInfo = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      // reader.onload = (e) => {
      //   const previewImage = document.getElementById(
      //     'showIMG'
      //   ) as HTMLImageElement;
      //   if (previewImage) {
      //     previewImage.src = reader.result as string;
      //   }
      reader.onloadend = (e) => {
        setImgPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form action="" className={styles.addFormContainer}>
      <div className={styles.imgBox}>
        <img src={imgPreview} alt="" />
        <div className={styles.editBtn}>
          <input
            type="file"
            name="editImgBtn"
            id="editImgBtn"
            className=""
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

        <label htmlFor="">계절</label>
        <SelectWeather />

        <label htmlFor="">두께</label>
        <SelectThickness />

        <label htmlFor="">색</label>
        <SelectColor />
        <label htmlFor="">구매가격</label>
        <input type="number" name="" id="" />
      </div>
      <div className={styles.btnBox}>
        <button className={styles.submit}>저장하기</button>
        <button className={styles.temSubmit}>임시저장하기</button>
      </div>
    </form>
  );
}
