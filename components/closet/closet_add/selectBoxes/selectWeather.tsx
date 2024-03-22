'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../../../styles/closet/addform.module.scss';
import { selectWeather } from '../../../../Store/closetSlice/addClothesSlice';

export default function SelectWeather() {
  const [isClicked, setIsClicked] = useState(null);
  const dispatch = useDispatch();

  const submit = (value) => {
    setIsClicked(value);
    dispatch(selectWeather({ value: value }));
  };

  return (
    <>
      <label htmlFor="weather">계절</label>
      <div className={styles.weatherBox}>
        <input
          type="button"
          name=""
          id="weatherSpring"
          value={'봄'}
          onClick={() => submit('봄')}
          className={`${isClicked === '봄' && styles.weatherClicked}`}
        />
        <input
          type="button"
          name=""
          id="weatherSummer"
          value={'여름'}
          onClick={() => submit('여름')}
          className={`${isClicked === '여름' && styles.weatherClicked}`}
        />
        <input
          type="button"
          name=""
          id="weatherAuthum"
          value={'가을'}
          onClick={() => submit('가을')}
          className={`${isClicked === '가을' && styles.weatherClicked}`}
        />
        <input
          type="button"
          name=""
          id="weatherWinter"
          value={'겨울'}
          onClick={() => submit('겨울')}
          className={`${isClicked === '겨울' && styles.weatherClicked}`}
        />
      </div>
    </>
  );
}
