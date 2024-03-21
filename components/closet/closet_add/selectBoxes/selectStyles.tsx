'use client';

import styles from '../../../../styles/closet/addform.module.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStyle_str } from '../../../../Store/closetSlice/addClothesSlice';
export default function SelectStyles() {
  interface aiStyles {
    style_num: string;
    score: string;
  }
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(null);

  const aiStyles: aiStyles = useSelector((state: any) => ({
    style_num: state.clothes.clothes.style_num,
    score: state.clothes.clothes.score,
  }));

  // console.log('스코어', aiStyles.score);

  const [styleState, setStyleState] = useState('');

  useEffect(() => {
    switch (aiStyles.style_num) {
      case '0':
        setStyleState('Casual');
        dispatch(selectStyle_str({ value: 'Casual' }));
        break;
      case '1':
        setStyleState('Sporty');
        dispatch(selectStyle_str({ value: 'Sporty' }));
        break;
      case '2':
        setStyleState('Retro');
        dispatch(selectStyle_str({ value: 'Retro' }));
        break;
      case '3':
        setStyleState('Gorp_Core');
        dispatch(selectStyle_str({ value: 'Gorp_Core' }));
        break;
      case '4':
        setStyleState('Formal');
        dispatch(selectStyle_str({ value: 'Formal' }));
        break;
    }
    console.log('스타일', aiStyles.style_num);
  }, [aiStyles.style_num]);

  return (
    <>
      <label htmlFor="style">스타일</label>
      <div className={styles.thicknessBox}>
        <input type="text" name="style" value={styleState} readOnly />
      </div>
    </>
  );
}
