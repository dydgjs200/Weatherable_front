import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectBrandName } from '../../../../Store/closetSlice/addClothesSlice';

export default function SelectBrand() {
  const dispatch = useDispatch();
  const [brandName, setBrandName] = useState('');

  return (
    <>
      <input
        type="text"
        name="brand"
        id=""
        value={brandName}
        onChange={(e) => {
          setBrandName(e.target.value);
          dispatch(selectBrandName({ value: e.target.value }));
        }}
      />
    </>
  );
}
