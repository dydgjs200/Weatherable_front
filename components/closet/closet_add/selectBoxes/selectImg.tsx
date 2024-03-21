'use client';

import React, { useState, useEffect } from 'react';
import styles from '../../../../styles/closet/addform.module.scss';
import { useDispatch } from 'react-redux';
import { selectImg as selectImgAction } from '../../../../Store/closetSlice/addClothesSlice';

import { imgSend } from '../../../../service/closetApiService';

export default function SelectImg() {
  const dispatch = useDispatch();

  // 미리보기
  const [imgPreview, setImgPreview] = useState<string | null>(null);
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    dispatch(selectImgAction({ value: imgUrl }));
  }, [imgUrl, dispatch]);

  const addImg = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const imageUrl = reader.result as string;
        setImgPreview(imageUrl);

        // dispatch(selectImgAction({ value: imageUrl }));
        // ai를 위해 이미지 저장
        const fetchData = async () => {
          try {
            // s3 이미지 저장
            const imgData = await imgSend(file);
            setImgUrl(imgData);
            // dispatch(selectImgAction({ value: imgUrl }));
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
        console.log('s3저장 경로', imgUrl);

      };
      reader.readAsDataURL(file);
    }
  };


  useEffect(() => {
    if (imgUrl !== '') {
      dispatch(selectImgAction({ value: imgUrl }));
    }
  }, [imgUrl]);

  // dispatch(selectImgAction({ value: imgUrl }));

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
