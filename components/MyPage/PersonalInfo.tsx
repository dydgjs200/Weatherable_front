import styles from '../../styles/MyPage/PersonalInfo.module.scss';

function PersonalInfo() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content_Div}>
          <div>키</div>
          <div>180 cm</div>
        </div>
        <div className={styles.content_Div}>
          <div>몸무게</div>
          <div>68 kg</div>
        </div>
        <div className={styles.content_Div}>
          <div>몸무게</div>
          <div>68 kg</div>
        </div>
        <div className={styles.content_Div}>
          <div>몸무게</div>
          <div>68 kg</div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
