// api 호출 관련 코드 모음
import axios from 'axios';

// ai 이미지 저장 (스프링)
export const imgSend = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    console.log(file);
    const response = await axios.post(
      process.env.NEXT_PUBLIC_DB_HOST + '/closet/image',
      formData,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhY2Nlc3MiLCJpYXQiOjE3MTA1NjQwMzUsImV4cCI6MTcxMTc3MzYzNSwic3ViIjoiYWFhYSIsInNjb3BlIjoiUk9MRV9VU0VSIn0.2IvUS0NLvrkL223QlhnWd7JO-o9kpLAakYC_cpjV8KU',
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(process.env.NEXT_PUBLIC_DB_HOST + '/closet/image', error);
  }
};

// 옷장 등록 폼 전송
export const postAddClothes = async (clothesData: any) => {
  try {
    const formData = new FormData();
    for (const key in clothesData) {
      formData.append(key, clothesData[key]);
    }

    const response = await axios.post(
      'http://localhost:8080/closet',
      formData,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhY2Nlc3MiLCJpYXQiOjE3MTA1NjQwMzUsImV4cCI6MTcxMTc3MzYzNSwic3ViIjoiYWFhYSIsInNjb3BlIjoiUk9MRV9VU0VSIn0.2IvUS0NLvrkL223QlhnWd7JO-o9kpLAakYC_cpjV8KU',
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('http://localhost:8080/addClothes', error);
  }
};

//옷장 등록시 스타일 부분 gpt 활용 (파이썬)
export const postAddStyles = async (data: any) => {
  try {
    console.log(data);
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    console.log(formData);

    const response = await axios.post(
      process.env.NEXT_PUBLIC_PYTHON + '/sendmessage',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(process.env.NEXT_PUBLIC_PYTHON + '/sendmessage', error);
  }
};

// 스타일 가져오기
// export const getAddStyles = async () => {
//   try {
//     const response = await axios.get('http://localhost:5000/getAddStyles');
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error('예상치 못한 오류가 발생했습니다! (스타일 불러오기)');
//   }
// };

// 크롤링 옷 데이터 가져오기 (메인)
export const getCrawlingClothes = async () => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_DB_HOST + '/clothinfo',
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhY2Nlc3MiLCJpYXQiOjE3MTA1NjQwMzUsImV4cCI6MTcxMTc3MzYzNSwic3ViIjoiYWFhYSIsInNjb3BlIjoiUk9MRV9VU0VSIn0.2IvUS0NLvrkL223QlhnWd7JO-o9kpLAakYC_cpjV8KU',
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );

    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error('예상치 못한 오류가 발생했습니다! (크롤링 옷 불러오기)');
  }
};

export const getUserClothes = async () => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_DB_HOST + '/closet',
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhY2Nlc3MiLCJpYXQiOjE3MTA1NjQwMzUsImV4cCI6MTcxMTc3MzYzNSwic3ViIjoiYWFhYSIsInNjb3BlIjoiUk9MRV9VU0VSIn0.2IvUS0NLvrkL223QlhnWd7JO-o9kpLAakYC_cpjV8KU',
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );

    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error('예상치 못한 오류가 발생했습니다! (유저 옷 정보 불러오기)');
  }
};

// 크롤링 옷 검색
export const searchClothesGet = async (wordData: string) => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_DB_HOST + '/closet/clothesinfo/search',
      { params: { wordData } }
    );
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('예상치 못한 오류가 발생했습니다! (크롤링 데이터 검색)');
  }
};

// 옷 정보 수정
