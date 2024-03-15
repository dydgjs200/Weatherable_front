import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectPrice as selectPriceAction } from '../../../../Store/closetSlice/addClothesSlice';

export default function SelectPrice() {
  const dispatch = useDispatch();
  const [price, setPrice] = useState('');

  return (
    <input
      type="text"
      name=""
      id=""
      value={price}
      onChange={(e) => {
        setPrice(e.target.value);
        dispatch(selectPriceAction({ value: e.target.value }));
      }}
    />
  );
}
