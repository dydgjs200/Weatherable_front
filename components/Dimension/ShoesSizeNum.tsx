import styles from '../../styles/Dimension/ShoesSizeNum.module.scss';

function ShoesSizeNum() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.dimension}>
          <div className={styles.number}>1</div>
          <div>발길이</div>
          <div className={styles.input_Div}>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.unit}>mm</div>
        </div>
        <div className={styles.dimension}>
          <div className={styles.number}>2</div>
          <div>발볼</div>
          <div className={styles.input_Div}>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.unit}>mm</div>
        </div>
      </div>
    </>
  );
}

export default ShoesSizeNum;