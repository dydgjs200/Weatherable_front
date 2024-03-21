'use client';
import React, { useState } from 'react';
import styles from '../../styles/codi/codi.module.scss';
import styles2 from '../../styles/codi/codi2.module.scss';
import Cookies from 'js-cookie';

import ClosetPage from '../../components/uploadcloset/uploadcloset';
import MyComponent from '../codipage/image';

interface CodiPageProps {}

const CodiPage: React.FC<CodiPageProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndexes, setSelectedIndexes] = useState<{
    [key: string]: number | null;
  }>({
    모자: null,
    상의: null,
    겉옷: null,
    하의: null,
    신발: null,
  });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<{
    [key: string]: string | null;
  }>({
    모자: null,
    상의: null,
    겉옷: null,
    하의: null,
    신발: null,
  });

  const openModal = (category: string) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageSelect = (imageSrc: string, index: number) => {
    const updatedSelectedIndexes = { ...selectedIndexes };
    updatedSelectedIndexes[selectedCategory!] = index;
    setSelectedIndexes(updatedSelectedIndexes);
    setSelectedImages({ ...selectedImages, [selectedCategory!]: imageSrc });
    closeModal();
  };

  const handleRegister = () => {
    // 등록하기 버튼 클릭 시 쿠키에 선택된 인덱스만 저장
    Cookies.set('selectedIndexes', JSON.stringify(selectedIndexes));
    alert('등록되었습니다.');
  };

  return (
    <div>
      <div className={styles2.container}>
        <div
          className={styles2.uploadButtonHat}
          onClick={() => openModal('모자')}
        >
          {' '}
          {selectedIndexes['모자'] !== null ? (
            <MyComponent
              // imageindex={`${selectedIndexes['모자']}`}
              imageSrc={`${selectedImages['모자']}`}
              onClick={() => openModal('모자')} // onClick prop을 전달합니다.
            />
          ) : (
            '모자'
          )}
        </div>
        <div
          className={styles2.uploadButtonHat}
          onClick={() => openModal('상의')}
        >
          {' '}
          {selectedIndexes['상의'] !== null ? (
            <MyComponent
              // imageindex={`${selectedIndexes['모자']}`}
              imageSrc={`${selectedImages['상의']}`}
              onClick={() => openModal('상의')} // onClick prop을 전달합니다.
            />
          ) : (
            '상의'
          )}
        </div>
        <div
          className={styles2.uploadButtonHat}
          onClick={() => openModal('겉옷')}
        >
          {' '}
          {selectedIndexes['겉옷'] !== null ? (
            <MyComponent
              // imageindex={`${selectedIndexes['모자']}`}
              imageSrc={`${selectedImages['겉옷']}`}
              onClick={() => openModal('겉옷')} // onClick prop을 전달합니다.
            />
          ) : (
            '겉옷'
          )}
        </div>
        <div
          className={styles2.uploadButtonHat}
          onClick={() => openModal('하의')}
        >
          {' '}
          {selectedIndexes['하의'] !== null ? (
            <MyComponent
              // imageindex={`${selectedIndexes['모자']}`}
              imageSrc={`${selectedImages['하의']}`}
              onClick={() => openModal('하의')} // onClick prop을 전달합니다.
            />
          ) : (
            '하의'
          )}
        </div>
        <div
          className={styles2.uploadButtonHat}
          onClick={() => openModal('신발')}
        >
          {' '}
          {selectedIndexes['신발'] !== null ? (
            <MyComponent
              // imageindex={`${selectedIndexes['모자']}`}
              imageSrc={`${selectedImages['신발']}`}
              onClick={() => openModal('신발')} // onClick prop을 전달합니다.
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
        <button onClick={handleRegister}>등록하기</button>
      </div>
    </div>
  );
};

export default CodiPage;
