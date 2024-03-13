import styles from '../../../../styles/closet/addform.module.scss';
import { useState } from 'react';

export default function SelectThickness() {
  const [isClicked, setIsClicked] = useState(null);

  const submit = (value) => {
    setIsClicked(value);
  };

  return (
    <div className={styles.thicknessBox}>
      <input
        type="button"
        name=""
        id=""
        value={'얇음'}
        onClick={() => submit('얇음')}
        className={`${isClicked === '얇음' && styles.thickClicked}`}
      />
      <input
        type="button"
        name=""
        id=""
        value={'보통'}
        onClick={() => submit('보통')}
        className={`${isClicked === '보통' && styles.thickClicked}`}
      />
      <input
        type="button"
        name=""
        id=""
        value={'두꺼움'}
        onClick={() => submit('두꺼움')}
        className={`${isClicked === '두꺼움' && styles.thickClicked}`}
      />
    </div>
  );
}
