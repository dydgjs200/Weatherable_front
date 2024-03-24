'user client';
import React from 'react';
import styles from '../../styles/closet/closet.module.scss';
// ClothesInfoBox 컴포넌트에서 선택된 이미지 정보를 전달받을 props 추가
interface ClothesInfoBoxProps {
  clothes: {
    imagePath: string;
    id: number;
    productName: string;
  };
  index: number; // 이미지의 인덱스를 전달받을 props 추가
  onImageSelect: (imageSrc: string, index: number) => void; // 이미지를 클릭했을 때 호출될 함수 타입 정의
}

// ClothesInfoBox 컴포넌트에서 이미지를 클릭했을 때 호출될 함수 추가
const ClothesInfoBox: React.FC<ClothesInfoBoxProps> = ({
  clothes,
  index,
  onImageSelect,
}) => {
  const liked = () => {
    console.log('좋아요!');
  };

  const { imagePath, productName } = clothes;

  const onClick = () => {
    console.log('이미지 URL:', imagePath);
    console.log('인덱스:', index); // 이미지의 인덱스 출력
    onImageSelect(imagePath, index); // 이미지 클릭 시 선택된 이미지 정보와 인덱스를 상위 컴포넌트로 전달
  };

  return (
    <div className={styles.infoSmallBox} onClick={onClick}>
      <div>
        <span className={styles.title}>{productName}</span>
        <button onClick={liked}>
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </div>
      <img src={imagePath} alt="" />
    </div>
  );
};

export default ClothesInfoBox;
