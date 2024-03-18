'use client';

import React, { useState } from 'react';
import styles from '../../../../styles/closet/addform.module.scss';
import { useDispatch } from 'react-redux';
import { selectImg as selectImgAction } from '../../../../Store/closetSlice/addClothesSlice';
import { imgSend } from '../../../../service/closetApiService';

export default function SelectImg() {
  const dispatch = useDispatch();
  const [imgPreview, setImgPreview] = useState<string | null>(null);

  const addImg = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        // console.log(imageUrl);
        setImgPreview(imageUrl);
        dispatch(selectImgAction({ value: imageUrl }));
        // ai를 위해 이미지 저장
        imgSend(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <img src={imgPreview} alt="" />
      <div className={styles.editBtn}>
        <input
          type="file"
          name="editImgBtn"
          id="editImgBtn"
          className=""
          onChange={addImg}
        />
        <label htmlFor="editImgBtn">
          <span className="material-symbols-outlined">edit</span>
        </label>
      </div>
    </>
  );
}
