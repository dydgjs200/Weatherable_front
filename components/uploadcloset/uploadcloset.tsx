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
  onImageSelect: (imageSrc: string) => void;
}

const Closet: React.FC<ClosetPageProps> = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sortStatus = useSelector((state: any) => state.status.status);
  console.log('sort 상태', sortStatus);

  const handleImageSelect = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    onImageSelect(imageUrl); // 선택된 이미지를 상위 컴포넌트로 전달
  };

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
        <ClothesInfoBox onImageClick={handleImageSelect} />
        <ClothesInfoBox2 onImageClick={handleImageSelect} />
        <ClothesInfoBox3 onImageClick={handleImageSelect} />
        <ClothesInfoBox onImageClick={handleImageSelect} />
      </div>
    </div>
  );
};

export default Closet;
