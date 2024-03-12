import styles from '../../styles/MyPage/Dimension.module.scss';

function Dimension() {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>Item 1</div>
        <div className={styles.gridItem}>Item 2</div>
        <div className={styles.gridItem}>Item 3</div>
        <div className={styles.gridItem}>Item 4</div>
      </div>
    </>
  );
}

export default Dimension;
