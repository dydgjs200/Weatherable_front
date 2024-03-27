import React from 'react';
import styles from '../styles/MoveLoginModal.module.scss';

const MoveLoginModal = ({ isOpen, onConfirm }) => {
  return (
    isOpen && (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.modalLogo}>
            <img src="/logo.png" alt="" />
          </div>
          <p className={styles.modalText}>로그인 후 이용 가능합니다.</p>
          <div className={styles.modalActions}>
            <button
              className={styles.withdrawalModalButtonYes}
              onClick={onConfirm}
            >
              로그인으로
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default MoveLoginModal;
