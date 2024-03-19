'use client';
// CodiPage 컴포넌트
import React, { useState } from 'react';
import styles from '../../styles/codi/codi.module.scss';
import styles2 from '../../styles/codi/codi2.module.scss';

import ClosetPage from '../../components/uploadcloset/uploadcloset';
import MyComponent from '../codipage/image';

interface CodiPageProps {}

const CodiPage: React.FC<CodiPageProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<{
    [key: string]: string | null;
  }>({
    모자: null,
    상의: null,
    겉옷: null,
    하의: null,
    신발: null,
  });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageSelect = (imageSrc: string) => {
    const updatedSelectedImages = { ...selectedImages };
    updatedSelectedImages[selectedCategory!] = imageSrc;
    setSelectedImages(updatedSelectedImages);
    closeModal();
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    if (!selectedImages[category]) {
      openModal();
    }
  };

  return (
    <div>
      <div className={styles2.container}>
        <div
          className={styles2.uploadButtonHat}
          onClick={() => selectCategory('모자')}
        >
          {selectedImages['모자'] ? (
            <MyComponent
              imageSrc={selectedImages['모자']}
              onClick={openModal}
            />
          ) : (
            '모자'
          )}
        </div>

        <div
          className={styles2.uploadButtonTop}
          onClick={() => selectCategory('상의')}
        >
          {selectedImages['상의'] ? (
            <MyComponent
              imageSrc={selectedImages['상의']}
              onClick={openModal}
            />
          ) : (
            '상의'
          )}
        </div>

        <div
          className={styles2.uploadButtonOuter}
          onClick={() => selectCategory('겉옷')}
        >
          {selectedImages['겉옷'] ? (
            <MyComponent
              imageSrc={selectedImages['겉옷']}
              onClick={openModal}
            />
          ) : (
            '겉옷'
          )}
        </div>

        <div
          className={styles2.uploadButtonPants}
          onClick={() => selectCategory('하의')}
        >
          {selectedImages['하의'] ? (
            <MyComponent
              imageSrc={selectedImages['하의']}
              onClick={openModal}
            />
          ) : (
            '하의'
          )}
        </div>

        <div
          className={styles2.uploadButtonShoes}
          onClick={() => selectCategory('신발')}
        >
          {selectedImages['신발'] ? (
            <MyComponent
              imageSrc={selectedImages['신발']}
              onClick={openModal}
            />
          ) : (
            '신발'
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <button onClick={closeModal}>Close Modal</button>
          <div className={styles.modalContent}>
            <ClosetPage onImageSelect={handleImageSelect} />
          </div>
        </div>
      )}
      <div>
        <button>등록하기</button>
      </div>
    </div>
  );
};

export default CodiPage;
