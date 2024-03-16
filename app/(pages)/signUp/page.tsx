import { useState } from 'react';
import styles from '../../../styles/User/signup.module.scss';
import axios from 'axios';

function SignUp() {
  const [userData, setUserData] = useState({
    userid: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  });

  const handleSignUp = (e) => {
    e.preventDefault();

    if (userData.password !== userData.passwordConfirm) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    axios
      .post('localhost:8080/signup', userData)
      .then((res) => {
        console.log('회원가입 성공');
        console.log('확인 >>', res);
      })
      .catch((error) => {
        console.error('오류 발생', error);
      });
  };

  return (
    <>
      <div className={styles.signup_Container}>
        <div className={styles.title}>회원가입</div>

        <form onSubmit={handleSignUp}>
          <div className={styles.content}>
            {/* id */}
            <div className={styles.signup_Content_Container}>
              <div className={styles.signup_title}>아이디</div>
              <input
                className={styles.signup_input}
                type="text"
                name="userid"
                value={userData.userid}
                placeholder="아이디"
              />
            </div>
            {/* password */}
            <div className={styles.signup_Content_Container}>
              <div className={styles.signup_title}>비밀번호</div>
              <input
                className={styles.signup_input}
                type="password"
                name="password"
                value={userData.password}
                placeholder="비밀번호"
              />
            </div>
            {/* password check*/}
            <div className={styles.signup_Content_Container}>
              <div className={styles.signup_title}>비밀번호 재확인</div>
              <input
                className={styles.signup_input}
                type="password"
                name="passwordConfirm"
                value={userData.passwordConfirm}
                placeholder="비밀번호 재확인"
              />
            </div>
            {/* nickname */}
            <div className={styles.signup_Content_Container}>
              <div className={styles.signup_title}>닉네임</div>
              <input
                className={styles.signup_input}
                type="text"
                name="nickname"
                value={userData.nickname}
                placeholder="닉네임"
              />
            </div>
          </div>
          <button type="submit" className={styles.signup_Btn}>
            회원가입
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
