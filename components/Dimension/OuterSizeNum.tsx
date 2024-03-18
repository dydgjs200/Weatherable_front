import styles from '../../styles/Dimension/OuterSizeNum.module.scss';

function OuterSizeNum() {
  // 치수 정보 배열
  const dimensions = [
    { number: '1', name: '총장' },
    { number: '2', name: '가슴단면' },
    { number: '3', name: '어깨너비' },
    { number: '4', name: '소매길이' },
  ];

  return (
    <div className={styles.container}>
      <form>
        {dimensions.map((dimension, index) => (
          <div key={index} className={styles.dimension}>
            <div className={styles.number}>{dimension.number}</div>
            <div>{dimension.name}</div>
            <div className={styles.input_Div}>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.unit}>cm</div>
          </div>
        ))}
      </form>

      <button className={styles.btn}>저장하기</button>
    </div>
  );
}

export default OuterSizeNum;
