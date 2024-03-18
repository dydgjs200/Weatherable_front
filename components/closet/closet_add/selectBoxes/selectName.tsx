import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectProductName } from '../../../../Store/closetSlice/addClothesSlice';

export default function SelectName() {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');

  return (
    <>
      <label htmlFor="productName">제품명</label>
      <input
        type="text"
        name="productName"
        id=""
        value={productName}
        onChange={(e) => {
          setProductName(e.target.value);
          dispatch(selectProductName({ value: e.target.value }));
        }}
      />
    </>
  );
}
