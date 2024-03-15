// api 호출 관련 코드 모음
import axios from 'axios';
import exp from 'constants';

// 옷장 등록 폼 전송
export const postAddClothes = async (clothesData: any) => {
  try {
    const formData = new FormData();
    for (const key in clothesData) {
      formData.append(key, clothesData[key]);
    }

    const response = await axios.post(
      'http://localhost:8080/closet',
      clothesData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log('http://localhost:8080/addClothes');
  }
};

//옷장 등록시 스타일 부분 gpt 활용
export const postAddStyles = async (data: any) => {
  try {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    console.log(data);

    const response = await axios.post(
      'http://localhost:5000/postAddStyles',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log('http://localhost:5000/postAddStyles');
  }
};

// 스타일 가져오기
export const getAddStyles = async () => {
  try {
    const response = await axios.get('http://localhost:5000/getAddStyles');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('예상치 못한 오류가 발생했습니다! (게시글 불러오기)');
  }
};
