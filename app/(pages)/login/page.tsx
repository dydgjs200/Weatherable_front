import Link from 'next/link';
import styles from '../../../styles/User/login.module.scss';

function Login() {
  return (
    <>
      <div className={styles.login_Container}>
        <div className={styles.title}>로그인</div>

        <div className={styles.content}>
          {/* id */}
          <div className={styles.login_Content_Container}>
            <div className={styles.login_title}>아이디</div>
            <input
              className={styles.login_input}
              type="text"
              placeholder="아이디"
            />
          </div>
          {/* password */}
          <div className={styles.login_Content_Container}>
            <div className={styles.login_title}>비밀번호</div>
            <input
              className={styles.login_input}
              type="text"
              placeholder="비밀번호"
            />
          </div>
          {/* etc */}
          <div className={styles.login_info}>
            <div>아이디 찾기</div>
            <img src="bar.png" alt="" />
            <div>비밀번호 찾기</div>
            <img src="bar.png" alt="" />
            <Link href={'/signup'}>
              <div>회원가입</div>
            </Link>
          </div>
        </div>
        <button className={styles.login_Btn}>로그인</button>
      </div>
    </>
  );
}

export default Login;
