'use client';

import React, { useState } from 'react';
import styles from '../../styles/codi/codi.module.scss';
import ClosetPage from '../../components/uploadcloset/uploadcloset';

interface CodiPageProps {
  imageSrc: string | null; // 이미지가 null일 수도 있으므로 타입 수정
}

const CodiPage: React.FC<CodiPageProps> = ({ imageSrc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 변수

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* CodiPage 컴포넌트의 내용 */}
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
      {/* 선택한 아이템의 이미지 출력 */}
      {imageSrc && <img src={imageSrc} alt="Selected Outfit" />}
    </div>
  );
};

export default CodiPage;
