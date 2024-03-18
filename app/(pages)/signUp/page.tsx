'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from '../../../styles/User/signup.module.scss';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface UserData {
  userid: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
}

const SignUp: React.FC = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>({
    userid: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log('e >', e.target);
    // name : userid
    // value : banana

    const { name, value } = e.target;
    if (name === 'userid' && value.trim() !== '') {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_DB_HOST}/validation`
        );
        if (res.data.exists) {
          alert('이미 사용 중인 아이디 입니다.');
        }
        console.log('res > ', res);
      } catch (error) {
        console.error('오류 발생', error);
      }
    }
  };

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userData.password !== userData.passwordConfirm) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    axios
      .post(`${process.env.NEXT_PUBLIC_DB_HOST}/signup`, userData)
      .then((res) => {
        console.log('회원가입 성공');
        console.log('확인 >>', res);
        router.push('/login');
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
                onChange={handleChange}
                onBlur={handleBlur}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
};

export default SignUp;
