'use client';
import React, { useState } from 'react';
import styles from '../../styles/codi/codi.module.scss';
import ClosetPage from '../../components/uploadcloset/uploadcloset';

interface CodiPageProps {}

const CodiPage: React.FC<CodiPageProps> = ({}) => {
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
    </div>
  );
};

export default CodiPage;
