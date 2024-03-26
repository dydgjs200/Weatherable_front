import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectPrice as selectPriceAction } from '../../../../Store/closetSlice/addClothesSlice';
import styles from '../../../../styles/closet/addform.module.scss';

export default function SelectPrice() {
  const dispatch = useDispatch();
  const [price, setPrice] = useState('');

  return (
    <>
      <label htmlFor="price">구매가격</label>
      <input
        type="text"
        name="price"
        id="price"
        value={price}
        className={styles.inputBox}
        onChange={(e) => {
          setPrice(e.target.value);
          dispatch(selectPriceAction({ value: e.target.value }));
        }}
      />
    </>
  );
}
