// codiApiservice.js 파일

import axios from 'axios';

// 쿠키에 저장된 데이터를 백엔드로 전송하는 함수
export const cookiesend = async (selectedData) => {
  const accessToken = sessionStorage.getItem('accessToken');

  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_DB_HOST + '/codi',
      selectedData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('데이터 전송 실패: ', error);
    throw new Error('데이터 전송에 실패했습니다.');
  }
};
