import React, { useState } from 'react';
import styles from '../../styles/closet/closet.module.scss';
import SelectBox from '../../components/closet/closet_main/selectBox';
import SortBox from '../../components/closet/closet_main/sortBox';
import ClothesInfoBox from '../../components/uploadcloset/uploadClosetInfoBox';
import CodiPage from '../codipage/image';
import { useSelector } from 'react-redux';

const Closet: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sortStatus = useSelector((state: any) => state.status.status);
  console.log('sort 상태', sortStatus);

  const handleImageSelect = (imageUrl: string) => {
    setSelectedImage(imageUrl);
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
        <ClothesInfoBox onImageClick={handleImageSelect} />
        <ClothesInfoBox onImageClick={handleImageSelect} />
        <ClothesInfoBox onImageClick={handleImageSelect} />
      </div>
      {/* sortStatus에 따라 조건부 렌더링 */}
      {sortStatus ? (
        <div className={styles.mainInfoBoxDefault}>
          <CodiPage imageSrc={selectedImage} />
        </div>
      ) : (
        <div className={styles.mainInfoBoxSmall}>
          <CodiPage imageSrc={selectedImage} />
        </div>
      )}
    </div>
  );
};

export default Closet;
