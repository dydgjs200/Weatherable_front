'use client';

import styles from '../../../../styles/closet/addform.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectStyle as selectStyleAction } from '../../../../Store/closetSlice/addClothesSlice';

export default function SelectStyles() {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(null);

  // const submit = (value) => {
  //   setIsClicked(value);
  //   dispatch(selectStyleAction({ value: value }));
  // };

  return (
    <>
      <label htmlFor="style">스타일</label>
      <div className={styles.thicknessBox}>
        <input type="text" name="style" value={'Casual'} readOnly />
        {/* <input
          type="button"
          name=""
          id=""
          value={'Casual'}
          onClick={() => submit('Casual')}
          className={`${isClicked === 'Casual' && styles.thickClicked}`}
        />
        <input
          type="button"
          name=""
          id=""
          value={'Sporty'}
          onClick={() => submit('Sporty')}
          className={`${isClicked === 'Sporty' && styles.thickClicked}`}
        />
        <input
          type="button"
          name=""
          id=""
          value={'Retro'}
          onClick={() => submit('Retro')}
          className={`${isClicked === 'Retro' && styles.thickClicked}`}
        />
        <input
          type="button"
          name=""
          id=""
          value={'Gorp_Core'}
          onClick={() => submit('Gorp_Core')}
          className={`${isClicked === 'Gorp_Core' && styles.thickClicked}`}
        />
        <input
          type="button"
          name=""
          id=""
          value={'Formal'}
          onClick={() => submit('Formal')}
          className={`${isClicked === 'Formal' && styles.thickClicked}`}
        /> */}
      </div>
    </>
  );
}
