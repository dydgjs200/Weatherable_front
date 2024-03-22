'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../../../styles/closet/addform.module.scss';
import { selectSize as selectSizeAction } from '../../../../Store/closetSlice/addClothesSlice';

export default function SelectSize() {
  const dispatch = useDispatch();
  const [isSizeDisabled, setIsSizeDisabled] = useState(false);

  const [size, setSize] = useState('S');

  const selectSize = (e) => {
    const selectedSize = e.target.value;
    setSize(selectedSize);
    setIsSizeDisabled(!isSizeDisabled);
    dispatch(selectSizeAction({ value: selectedSize }));
  };

  return (
    <>
      <label htmlFor="Size">사이즈</label>
      <section>
        <button
          className={styles.sizeBtn}
          onClick={(e) => {
            e.preventDefault();
            setIsSizeDisabled(!isSizeDisabled);
          }}
        >
          <span>{size}</span>
          <span className="material-symbols-outlined">keyboard_arrow_down</span>
        </button>
        {isSizeDisabled && (
          <section className={styles.sizeSelectBox}>
            <ul>
              <li>
                <input
                  type="button"
                  name=""
                  id="sizeS"
                  className="sizeInput"
                  value="S"
                  onClick={selectSize}
                />
              </li>
              <li>
                <input
                  type="button"
                  name=""
                  id="sizeM"
                  className="sizeInput"
                  value="M"
                  onClick={selectSize}
                />
              </li>
              <li>
                <input
                  type="button"
                  name=""
                  id="sizeL"
                  className="sizeInput"
                  value="L"
                  onClick={selectSize}
                />
              </li>
              <li>
                <input
                  type="button"
                  name=""
                  id="sizeXL"
                  className="sizeInput"
                  value="XL"
                  onClick={selectSize}
                />
              </li>
              <li>
                <input
                  type="button"
                  name=""
                  id="xizeXXL"
                  className="sizeInput"
                  value="XXL"
                  onClick={selectSize}
                />
              </li>
            </ul>
          </section>
        )}
      </section>
    </>
  );
}
