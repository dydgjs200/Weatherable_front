'use client';

import React from 'react';
import styles from '../../styles/closet/closet.module.scss';

interface ClothesInfoBoxProps {
  onImageClick: (imageUrl: string) => void;
}

const ClothesInfoBox: React.FC<ClothesInfoBoxProps> = ({ onImageClick }) => {
  return (
    <div
      className={styles.infoSmallBox}
      onClick={() =>
        onImageClick(
          'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png'
        )
      }
    >
      <div>
        <span>제품명</span>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png"
        alt=""
      />
    </div>
  );
};

export default ClothesInfoBox;
