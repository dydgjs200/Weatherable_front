// WithdrawalModal.js

import React from 'react';
import styles from '../styles/MoveLoginModal.module.scss';

const WithdrawalModal = ({ isOpen, onCancel, onConfirm }) => {
  return (
    isOpen && (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h2 className={styles.modalHeading}>경고</h2>
          <p className={styles.modalText}>로그인 후 이용 가능합니다.</p>
          <div className={styles.modalActions}>
            <button
              className={styles.withdrawalModalButtonYes}
              onClick={onConfirm}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default WithdrawalModal;
