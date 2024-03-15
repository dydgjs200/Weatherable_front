// api 호출 관련 코드 모음
import axios from 'axios';

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

//옷장 등록시 gpt 활용
export const postAddStyles = async (data: any) => {
  try {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    const response = await axios.post(
      'http://localhost:5000/postAddStyles',
      data,
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
