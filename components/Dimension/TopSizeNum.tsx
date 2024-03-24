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

'use client';

import { useEffect, useState } from 'react';
import styles from '../../styles/Dimension/TopSizeNum.module.scss';
import axios from 'axios';

function TopSizeNum() {
  // 치수 정보 배열
  const dimensions = [
    { number: '1', name: '총장', key: 't1' },
    { number: '2', name: '가슴단면', key: 't2' },
    { number: '3', name: '어깨너비', key: 't3' },
    { number: '4', name: '소매길이', key: 't4' },
  ];

  // 각 input 값에 해당하는 state
  const [inputValues, setInputValues] = useState({
    t1: '',
    t2: '',
    t3: '',
    t4: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = sessionStorage.getItem('accessToken');

        // 헤더에 액세스 토큰 설정
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;

        // 유저 정보 받아오기
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_DB_HOST}/user`
        );
        console.log(response.data.data.userSizeDTO);
        const { t1, t2, t3, t4 } = response.data.data.userSizeDTO;

        // 가져온 데이터를 state에 설정
        setInputValues({ t1, t2, t3, t4 });
      } catch (error) {
        console.error('유저 데이터를 가져오는 도중 오류 발생', error);
        if (error.response && error.response.status === 401) {
          // 만료된 토큰일 경우 토큰 refresh 시도
          try {
            const refreshToken = sessionStorage.getItem('refreshToken');
            const refreshResponse = await axios.post('/refresh', {
              refreshToken,
            });

            // 새로운 액세스 토큰으로 업데이트
            const accessToken = refreshResponse.data.accessToken;
            sessionStorage.setItem('accessToken', accessToken);

            // 다시 요청을 보내어 유저 데이터 가져오기
            axios.defaults.headers.common[
              'Authorization'
            ] = `Bearer ${accessToken}`;
            const retryResponse = await axios.get(
              `${process.env.NEXT_PUBLIC_DB_HOST}/user`
            );
            const { t1, t2, t3, t4 } = retryResponse.data.data.userSizeDTO;
            setInputValues({ t1, t2, t3, t4 });
          } catch (refreshError) {
            console.error('토큰 refresh 중 오류 발생', refreshError);
            // 토큰 refresh 실패 시 로그아웃 또는 다른 처리 수행
          }
        }
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (key, value) => {
    setInputValues({ ...inputValues, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 서버에 데이터 저장
      // await axios.post(`${process.env.NEXT_PUBLIC_DB_HOST}/user`, {
      //   userSizeDTO: inputValues,
      // });
      // 성공 메시지 등을 처리할 수 있습니다.
    } catch (error) {
      console.error('데이터를 저장하는 도중 오류 발생', error);
      // 오류 처리 로직 추가
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        {dimensions.map((dimension, index) => (
          <div key={index} className={styles.dimension}>
            <div className={styles.number}>{dimension.number}</div>
            <div>{dimension.name}</div>
            <div className={styles.input_Div}>
              <input
                className={styles.input}
                type="text"
                value={inputValues[dimension.key]}
                onChange={(e) => handleChange(dimension.key, e.target.value)}
              />
            </div>
            <div className={styles.unit}>cm</div>
          </div>
        ))}
        <button className={styles.btn} type="submit">
          저장하기
        </button>
      </form>
    </div>
  );
}

export default TopSizeNum;
