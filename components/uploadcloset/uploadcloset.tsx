import React, { useState } from 'react';
import styles from '../../styles/closet/closet.module.scss';
import SelectBox from '../../components/closet/closet_main/selectBox';
import SortBox from '../../components/closet/closet_main/sortBox';
import ClothesInfoBox from '../../components/uploadcloset/uploadClosetInfoBox';
import Mycomponent from '../codipage/image';
import { useSelector } from 'react-redux';
import ClothesInfoBox2 from '../../components/uploadcloset/uploadclosetinfo3';
import ClothesInfoBox3 from '../../components/uploadcloset/uploadcloset2';

interface ClosetPageProps {
  onImageSelect: (imageSrc: string, index: number) => void;
}

const Closet: React.FC<ClosetPageProps> = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sortStatus = useSelector((state: any) => state.status.status);
  console.log('sort 상태', sortStatus);

  const handleImageSelect = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    onImageSelect(imageUrl, index); // 선택된 이미지를 상위 컴포넌트로 전달
  };

  // 인덱스를 설정하기 위한 샘플 데이터 (실제 데이터에 따라 수정 필요)
  const clothesInfoBoxes = [
    <ClothesInfoBox
      key={1}
      onImageClick={(imageUrl: string) => handleImageSelect(imageUrl, 1)}
    />,
    <ClothesInfoBox2
      key={2}
      onImageClick={(imageUrl: string) => handleImageSelect(imageUrl, 2)}
    />,
    <ClothesInfoBox3
      key={3}
      onImageClick={(imageUrl: string) => handleImageSelect(imageUrl, 3)}
    />,
    <ClothesInfoBox
      key={4}
      onImageClick={(imageUrl: string) => handleImageSelect(imageUrl, 4)}
    />,
  ];

  return (
    <div className={styles.container}>
      <div className={styles.innerHeader}>
        <p>최진님의 옷장</p>
        <div>
          <span>50</span>
        </div>
      </div>
      <div className={styles.selectBox}>
        <SelectBox />
      </div>
      <div className={styles.sortBox}>
        <SortBox />
      </div>
      <div
        className={
          sortStatus ? styles.mainInfoBoxDefault : styles.mainInfoBoxSmall
        }
      >
        {/* clothesInfoBoxes 배열을 map하여 각각의 ClothesInfoBox 컴포넌트를 렌더링 */}
        {clothesInfoBoxes.map((box, index) => (
          <div key={index}>{box}</div>
        ))}
      </div>
    </div>
  );
};

export default Closet;
