// before

// import styles from '../../styles/Dimension/TopSizeNum.module.scss';

// function TopSizeNum() {
//   return (
//     <>
//       <div className={styles.container}>
//         <div className={styles.dimension}>
//           <div className={styles.number}>1</div>
//           <div>총장</div>
//           <div className={styles.input_Div}>
//             <input className={styles.input} type="text" />
//           </div>
//           <div className={styles.unit}>cm</div>
//         </div>
//         <div className={styles.dimension}>
//           <div className={styles.number}>2</div>
//           <div>가슴단면</div>
//           <div className={styles.input_Div}>
//             <input className={styles.input} type="text" />
//           </div>
//           <div className={styles.unit}>cm</div>
//         </div>
//         <div className={styles.dimension}>
//           <div className={styles.number}>3</div>
//           <div>어깨너비</div>
//           <div className={styles.input_Div}>
//             <input className={styles.input} type="text" />
//           </div>
//           <div className={styles.unit}>cm</div>
//         </div>
//         <div className={styles.dimension}>
//           <div className={styles.number}>4</div>
//           <div>소매길이</div>
//           <div className={styles.input_Div}>
//             <input className={styles.input} type="text" />
//           </div>
//           <div className={styles.unit}>cm</div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default TopSizeNum;

import styles from '../../styles/Dimension/TopSizeNum.module.scss';

function TopSizeNum() {
  // 치수 정보 배열
  const dimensions = [
    { number: '1', name: '총장' },
    { number: '2', name: '가슴단면' },
    { number: '3', name: '어깨너비' },
    { number: '4', name: '소매길이' },
  ];

  return (
    <div className={styles.container}>
      <form action="">
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
        <button className={styles.btn}>저장하기</button>
      </form>
    </div>
  );
}

export default TopSizeNum;
