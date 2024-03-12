'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showList } from '../../../Store/showListSlice';

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
        <span className="material-symbols-outlined">event_list</span>
      </button>
      <button onClick={bigImg}>
        <span className="material-symbols-outlined">widgets</span>
      </button>
    </>
  );
}
