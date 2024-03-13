import { useState } from 'react';
import styles from '../../../../styles/closet/addform.module.scss';

export default function SelectWeather() {
  const [isClicked, setIsClicked] = useState(null);

  const submit = (value) => {
    setIsClicked(value);
  };

  return (
    <div className={styles.weatherBox}>
      <input
        type="button"
        name=""
        id=""
        value={'봄'}
        onClick={() => submit('봄')}
        className={`${isClicked === '봄' && styles.weatherClicked}`}
      />
      <input
        type="button"
        name=""
        id=""
        value={'여름'}
        onClick={() => submit('여름')}
        className={`${isClicked === '여름' && styles.weatherClicked}`}
      />
      <input
        type="button"
        name=""
        id=""
        value={'가을'}
        onClick={() => submit('가을')}
        className={`${isClicked === '가을' && styles.weatherClicked}`}
      />
      <input
        type="button"
        name=""
        id=""
        value={'겨울'}
        onClick={() => submit('겨울')}
        className={`${isClicked === '겨울' && styles.weatherClicked}`}
      />
    </div>
  );
}
