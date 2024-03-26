import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectBrandName } from '../../../../Store/closetSlice/addClothesSlice';
import styles from '../../../../styles/closet/addform.module.scss';

export default function SelectBrand() {
  const dispatch = useDispatch();
  const [brandName, setBrandName] = useState('');

  return (
    <>
      <label htmlFor="brand">브랜드</label>
      <input
        type="text"
        name="brand"
        id="brand"
        value={brandName}
        className={styles.inputBox}
        onChange={(e) => {
          setBrandName(e.target.value);
          dispatch(selectBrandName({ value: e.target.value }));
        }}
      />
    </>
  );
}
