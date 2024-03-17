import styles from '../../styles/Dimension/BottomSizeNum.module.scss';

function BottomSizeNum() {
  // 치수 정보 배열
  const dimensions = [
    { number: '1', name: '총장' },
    { number: '2', name: '밑위' },
    { number: '3', name: '허리단면' },
    { number: '4', name: '엉덩이 단면' },
    { number: '5', name: '허벅지 단면' },
    { number: '6', name: '밑단 단면' },
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

export default BottomSizeNum;
