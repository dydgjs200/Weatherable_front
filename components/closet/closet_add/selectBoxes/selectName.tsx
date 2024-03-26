import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectProductName } from '../../../../Store/closetSlice/addClothesSlice';
import styles from '../../../../styles/closet/addform.module.scss';

export default function SelectName() {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');

  return (
    <>
      <label htmlFor="productName">제품명</label>
      <input
        className={styles.inputBox}
        type="text"
        name="productName"
        id="productName"
        value={productName}
        onChange={(e) => {
          setProductName(e.target.value);
          dispatch(selectProductName({ value: e.target.value }));
        }}
      />
    </>
  );
}
