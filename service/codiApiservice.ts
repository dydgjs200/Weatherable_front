import axios from 'axios';

// 선택된 이미지 정보를 백엔드로 전송하는 함수
export const postAddClothes = async (selectedImages) => {
  try {
    const formData = new FormData();

    // 선택된 이미지 정보를 FormData에 추가
    for (const category in selectedImages) {
      formData.append(category, selectedImages[category]);
    }

    // POST 요청 보내기
    const response = await axios.post(
      'http://localhost:8080/closet/index',
      formData,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhY2Nlc3MiLCJpYXQiOjE3MTA5MDI1NDMsImV4cCI6MTcxMjExMjE0Mywic3ViIjoiYmJiYiIsInNjb3BlIjoiUk9MRV9VU0VSIn0.hSMtuJespK65_Glnu8kewEHIPd5nvsLiBu56NVC1xsk', //
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );

    return response.data; // 성공적으로 처리된 경우에는 응답 데이터 반환
  } catch (error) {
    throw new Error('이미지 정보를 전송하는 중에 오류가 발생했습니다.'); // 오류 처리
  }
};
