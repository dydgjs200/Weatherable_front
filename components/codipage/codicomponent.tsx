'use client';
import React, { useState } from 'react';
import styles from '../../styles/codi/codi.module.scss';
import ClosetPage from '../../components/uploadcloset/uploadcloset'; // Closet 페이지 컴포넌트 import

export default function Mainpagebutton() {
  const [images, setImages] = useState<Array<string | null>>([
    null, // 모자
    null, // 겉옷
    null, // 상의
    null, // 하의
    null, // 신발
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 여부 상태

  const handleImageUpload =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const newImages = [...images];
          newImages[index] = reader.result as string;
          setImages(newImages);
        };
        reader.readAsDataURL(file);
      }
    };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      {/* 모달 버튼 */}
      <button onClick={openModal}>Upload Hat</button>
      <button onClick={openModal}>Upload Outer</button>

      <button onClick={openModal}>Upload Top</button>
      <button onClick={openModal}>Upload Pants</button>
      <button onClick={openModal}>Upload Shoes</button>

      {/* 모달 */}
      {isModalOpen && (
        <div className={styles.modal}>
          <button onClick={closeModal}>Close Modal</button>
          <div className={styles.modalContent}>
            <ClosetPage />
          </div>
        </div>
      )}
    </div>
  );
}
