import styles from '../../../styles/User/signup.module.scss';

function SignUp() {
  return <>
    <div className={styles.signup_Container}>
        <div className={styles.title}>회원가입</div>

        <div className={styles.content}>
          {/* id */}
          <div className={styles.signup_Content_Container}>
            <div className={styles.signup_title}>아이디</div>
            <input
              className={styles.signup_input}
              type="text"
              placeholder="아이디"
            />
          </div>
          {/* password */}
          <div className={styles.signup_Content_Container}>
            <div className={styles.signup_title}>비밀번호</div>
            <input
              className={styles.signup_input}
              type="text"
              placeholder="비밀번호"
            />
          </div>
          {/* password check*/}
          <div className={styles.signup_Content_Container}>
            <div className={styles.signup_title}>비밀번호 재확인</div>
            <input
              className={styles.signup_input}
              type="text"
              placeholder="비밀번호"
            />
          </div>
          {/* nickname */}
          <div className={styles.signup_Content_Container}>
            <div className={styles.signup_title}>닉네임</div>
            <input
              className={styles.signup_input}
              type="text"
              placeholder="닉네임"
            />
          </div>

        </div>
        <button className={styles.signup_Btn}>회원가입</button>
      </div>
  </>;
}

export default SignUp;
