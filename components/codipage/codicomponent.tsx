'use client';
// CodiPage 컴포넌트
// CodiPage 컴포넌트
import React, { useState } from 'react';
import styles from '../../styles/codi/codi.module.scss';
import ClosetPage from '../../components/uploadcloset/uploadcloset';
import MyComponent from '../codipage/image';

interface CodiPageProps {}

const CodiPage: React.FC<CodiPageProps> = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 변수
  const [selectedImages, setSelectedImages] = useState<{
    [key: string]: string | null;
  }>({
    모자: null,
    상의: null,
    겉옷: null,
    하의: null,
    신발: null,
  }); // 각 부위에 대한 선택된 이미지 상태 변수
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // 선택된 부위 상태 변수

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 이미지 선택 시 처리 함수
  const handleImageSelect = (imageSrc: string) => {
    const updatedSelectedImages = { ...selectedImages };
    updatedSelectedImages[selectedCategory!] = imageSrc;
    setSelectedImages(updatedSelectedImages);
    closeModal(); // 이미지를 선택하면 모달을 닫음
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    openModal(); // 선택한 부위에 따라 모달을 열음
  };

  return (
    <div>
      {/* CodiPage 컴포넌트의 내용 */}
      <div className={styles.container}>
        {/* 모달 버튼 */}
        <div
          className={styles.uploadButton}
          onClick={() => selectCategory('모자')}
        >
          모자
        </div>
        {selectedCategory === '모자' && selectedImages['모자'] && (
          <MyComponent imageSrc={selectedImages['모자']} />
        )}

        <div
          className={styles.uploadButton}
          onClick={() => selectCategory('상의')}
        >
          상의
        </div>
        {selectedCategory === '상의' && selectedImages['상의'] && (
          <MyComponent imageSrc={selectedImages['상의']} />
        )}

        <div
          className={styles.uploadButton}
          onClick={() => selectCategory('겉옷')}
        >
          겉옷
        </div>
        {selectedCategory === '겉옷' && selectedImages['겉옷'] && (
          <MyComponent imageSrc={selectedImages['겉옷']} />
        )}

        <div
          className={styles.uploadButton}
          onClick={() => selectCategory('하의')}
        >
          하의
        </div>
        {selectedCategory === '하의' && selectedImages['하의'] && (
          <MyComponent imageSrc={selectedImages['하의']} />
        )}

        <div
          className={styles.uploadButton}
          onClick={() => selectCategory('신발')}
        >
          신발
        </div>
        {selectedCategory === '신발' && selectedImages['신발'] && (
          <MyComponent imageSrc={selectedImages['신발']} />
        )}
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div className={styles.modal}>
          <button onClick={closeModal}>Close Modal</button>
          <div className={styles.modalContent}>
            {/* ClosetPage에 이미지 선택 핸들러 전달 */}
            <ClosetPage onImageSelect={handleImageSelect} />
            {/* 선택된 이미지가 있을 때만 보여줌 */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CodiPage;
