'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showList } from '../../../Store/closetSlice/showListSlice';

export default function SortBox() {
  const dispatch = useDispatch();

  const bigImg = () => {
    dispatch(showList(true));
  };

  const smallImg = () => {
    dispatch(showList(false));
  };

  return (
    <>
      <button onClick={smallImg}>
        <span className="material-symbols-outlined">splitscreen</span>
      </button>
      <button onClick={bigImg}>
        <span className="material-symbols-outlined">grid_view</span>
      </button>
    </>
  );
}
