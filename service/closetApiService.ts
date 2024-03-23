// api 호출 관련 코드 모음
import axios from 'axios';

// ai 이미지 저장 (스프링)
export const imgSend = async (file: File) => {
  const accessToken = sessionStorage.getItem('accessToken');
  try {
    const formData = new FormData();
    formData.append('image', file);

    console.log(file);
    const response = await axios.post(
      process.env.NEXT_PUBLIC_DB_HOST + '/closet/image',
      formData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
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
export const postAddClothes = async (closetDTO: any) => {
  const accessToken = sessionStorage.getItem('accessToken');
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_DB_HOST + '/closet',
      closetDTO,
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
    console.log('http://localhost:8080/closet', error);
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
  const accessToken = sessionStorage.getItem('accessToken');
  // 헤더에 액세스 토큰 및 사용자 ID 설정
  console.log(accessToken);
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_DB_HOST + '/clothinfo',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
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

// 크롤링 옷 정보 카테고리 기준으로 불러오기
export const getCrawlingClothesByCat = async (category: string) => {
  const accessToken = sessionStorage.getItem('accessToken');
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_DB_HOST + '/clothinfo/' + category,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );

    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      '예상치 못한 오류가 발생했습니다! (유저 옷 정보 불러오기/ 카테고리별)'
    );
  }
};

// 유저 옷 정보 (유저 옷장 전체 불러오기)
export const getUserClothes = async () => {
  const accessToken = sessionStorage.getItem('accessToken');
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_DB_HOST + '/closet',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );

    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error('예상치 못한 오류가 발생했습니다! (유저 옷 정보 불러오기)');
  }
};

// 유저 옷 정보 카테고리 기준으로 불러오기 (메인페이지)
export const getUserClothesByCat = async (category: string) => {
  const accessToken = sessionStorage.getItem('accessToken');
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_DB_HOST + '/closet/' + category,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );

    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      '예상치 못한 오류가 발생했습니다! (유저 옷 정보 불러오기/ 카테고리별)'
    );
  }
};

// 내 옷장 옷 정보 가져오기 id 기반
export const getMyClosetById = async (id: string) => {
  const accessToken = sessionStorage.getItem('accessToken');
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_DB_HOST + '/closet/cloth/' + id,

      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );

    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw new Error(
      '예상치 못한 오류가 발생했습니다! (id기반 옷 정보 불러오기-백)'
    );
  }
};

// 크롤링 옷 정보 가져오기
export const getCrawlingClothesById = async (id: string) => {
  const accessToken = sessionStorage.getItem('accessToken');
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_DB_HOST + '/clothinfo/cloth/' + id,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw new Error(
      '예상치 못한 오류가 발생했습니다! (id기반 크롤링 옷 정보 불러오기)'
    );
  }
};

// 크롤링 옷 검색
export const searchClothesGet = async (keyWord: string) => {
  const accessToken = sessionStorage.getItem('accessToken');
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_DB_HOST + '/clothinfo/search',
      {
        params: { keyWord },
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    console.log(response.data.msg);
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('예상치 못한 오류가 발생했습니다! (크롤링 데이터 검색)');
  }
};

// 옷 정보 삭제
export const deleteCloth = async (id: string) => {
  const accessToken = sessionStorage.getItem('accessToken');
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_DB_HOST}/closet/${id}`
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('옷 삭제 오류');
  }
};

// 옷 카테고리 분류해서 데이터 추출
export const selectCat = async (data: any) => {
  try {
    const response = await axios.post;
  } catch (error) {}
};
