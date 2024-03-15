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
      'http://localhost:3000/addClothes',
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
    console.log('http://localhost:3000/addClothes');
  }
};
