'use client';
import React, { useState } from 'react';
import styles from '../../../styles/closet/closet.module.scss';
import SelectCat from './selectCat';

export default function AddForm() {
  const [isSizeDisabled, setIsSizeDisabled] = useState(false);

  const [formData, setFormData] = React.useState({
    big_img: '',
  });

  const [size, setSize] = useState();

  const selectSize = (e) => {
    setSize(e.target.value);
    setIsSizeDisabled(!isSizeDisabled);
  };

  const addInfo = (e) => {
    // 이름
    console.log(e.target.value);
  };
  return (
    <form action="" className={styles.addForm}>
      <div className={styles.imgBox}>
        <img src={formData.big_img} alt="" />
        <div className={styles.editBtn}>
          <input
            type="file"
            name="editImgBtn"
            id="editImgBtn"
            className=""
            disabled
            onChange={addInfo}
          />
          <label htmlFor="editImgBtn">
            <span className="material-symbols-outlined">edit</span>
          </label>
        </div>
      </div>
      <div className={styles.infoBox}>
        <label htmlFor="">제품명</label>
        <input type="text" name="" id="" />
        <label htmlFor="">브랜드</label>
        <input type="text" name="" id="" />
        <label htmlFor="">카테고리</label>
        <SelectCat />
        <label htmlFor="">사이즈</label>
        <section>
          <button
            className={styles.sizeBtn}
            onClick={(e) => {
              e.preventDefault();
              setIsSizeDisabled(!isSizeDisabled);
            }}
          >
            <span>{size}</span>
            <span className="material-symbols-outlined">
              keyboard_arrow_down
            </span>
          </button>
          {isSizeDisabled && (
            <section className={styles.sizeSelectBox}>
              <ul>
                <li>
                  <input
                    type="button"
                    name=""
                    id=""
                    className="sizeInput"
                    value="S"
                    onClick={selectSize}
                  />
                </li>
                <li>
                  <input
                    type="button"
                    name=""
                    id=""
                    className="sizeInput"
                    value="M"
                    onClick={selectSize}
                  />
                </li>
                <li>
                  <input
                    type="button"
                    name=""
                    id=""
                    className="sizeInput"
                    value="L"
                    onClick={selectSize}
                  />
                </li>
                <li>
                  <input
                    type="button"
                    name=""
                    id=""
                    className="sizeInput"
                    value="XL"
                    onClick={selectSize}
                  />
                </li>
                <li>
                  <input
                    type="button"
                    name=""
                    id=""
                    className="sizeInput"
                    value="XXL"
                    onClick={selectSize}
                  />
                </li>
              </ul>
            </section>
          )}
        </section>

        <label htmlFor="">두께</label>
        <div className={styles.thicknessBox}>
          <input type="button" name="" id="" value={'봄'} />
          <input type="button" name="" id="" value={'여름'} />
          <input type="button" name="" id="" value={'가을'} />
          <input type="button" name="" id="" value={'겨울'} />
        </div>

        <label htmlFor="">색</label>
        <div className={styles.colorBox}>
          <input type="button" name="" id="" />
        </div>

        <label htmlFor="">구매가격</label>
        <input type="number" name="" id="" />
      </div>
      <div>
        <button>저장하기</button>
        <button>임시저장하기</button>
      </div>
    </form>
  );
}
