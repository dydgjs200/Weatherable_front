import styles from '../../styles/Dimension/TopSize.module.scss';

function TopSize() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img_Div}>
          <img src="/topsize.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default TopSize;
