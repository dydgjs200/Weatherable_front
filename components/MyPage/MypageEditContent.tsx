import styles from '../../styles/MyPage/mypageEditContent.module.scss';

function MypageEditContent() {
  return (
    <>
      <div className={styles.Container}>
        {/* 선호스타일 변경 */}
        <div className={styles.title_div}>
          <img src="/login_bar.png" alt="" />
          <div className={styles.title}>선호스타일</div>
        </div>
        <div className={styles.like_Style_div}>
          <div className={styles.like_Style}>캐주얼</div>
          <div className={styles.like_Style}>미니멀</div>
          <div className={styles.like_Style}>포멀</div>
          <div className={styles.like_Style}>스포츠</div>
          <div className={styles.like_Style}></div>
          <div className={styles.like_Style}></div>
          <div className={styles.like_Style}></div>
          <div className={styles.like_Style}></div>
        </div>
        {/* 체형 정보 변경 */}
        <div className={styles.title_div}>
          <img src="/login_bar.png" alt="" />
          <div className={styles.title}>체형 정보</div>
        </div>
        <div className={styles.physical_Info_div}>
          {/* 키 */}
          <div className={styles.height}>
            <div className={styles.height_title}>키 (cm)</div>
            <div className={styles.height_input_div}>
              <input className={styles.height_input} type="text" readOnly />
            </div>
            <div className={styles.icon}>icon</div>
          </div>
          <br />
          {/* 몸무게 */}
          <div className={styles.weight}>
            <div className={styles.weight_title}>몸무게 (kg)</div>
            <div className={styles.weight_input_div}>
              <input className={styles.weight_input} type="text" readOnly />
            </div>
            <div className={styles.icon}>icon</div>
          </div>
        </div>
        {/* 아이디 변경 */}
        <div className={styles.title_div}>
          <img src="/login_bar.png" alt="" />
          <div className={styles.title}>아이디</div>
        </div>
        <div>
          <input className={styles.input} type="text" readOnly />
        </div>
        {/* 비밀번호 변경 */}
        <div className={styles.title_div}>
          <img src="/login_bar.png" alt="" />
          <div className={styles.title}>비밀번호</div>
        </div>
        <div>
          <input className={styles.input} type="text" />
        </div>
        {/* 비밀번호 변경 확인 */}
        <div className={styles.title_div}>
          <img src="/login_bar.png" alt="" />
          <div className={styles.title}>비밀번호 재확인</div>
        </div>
        <div>
          <input className={styles.input} type="text" />
        </div>
        {/* 저장하기 버튼 */}
        <button className={styles.Btn}>저장하기</button>
      </div>
    </>
  );
}

export default MypageEditContent;
