'use client';

import { useEffect, useState } from 'react';
import styles from '../../styles/MyPage/mypageEditHeader.module.scss';
import axios from 'axios';

interface UserData {
  nickname: string;
}

const MypageEditHeader: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    nickname: '',
  });
  const [editable, setEditable] = useState<boolean>(false); // 수정 가능한지 여부를 나타내는 상태
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // 이미지를 선택했을 때 호출되는 함수
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      console.log('e.target > ', e.target.files);
    }
  };

  // 선택된 이미지를 업로드하는 함수
  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedImage!);

      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_DB_HOST}/user/image`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );
      console.log('이미지 업로드 완료', response);

      // 이미지 업로드 후 유저 데이터 갱신
      fetchUserData();
    } catch (error) {
      console.error('이미지 업로드 중 오류 발생', error);
    }
  };

  // 이 부분이 있어야 요청이 가능하다. AT 을 헤더에 넣어서 보내야 하기 때문.
  const fetchUserData = async () => {
    try {
      // 헤더에 액세스 토큰 및 사용자 ID 설정
      // 전역으로 설정 모든 요청에 대해 헤더에 토큰 추가
      const accessToken = sessionStorage.getItem('accessToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      // 유저 정보 받아오기
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_DB_HOST}/user`
      );
      const { nickname } = response.data.data; // 서버에서 받은 닉네임
      // console.log(response.data.data.nickname);

      // console.log(response.data.data);

      setUserData({ ...userData, nickname });
    } catch (error) {
      console.error('유저 데이터를 가져오는 도중 오류 발생', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // 서버에 닉네임 저장 요청 함수
  const saveNickname = async () => {
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_DB_HOST}/user/nickname`,
        userData
      );
      console.log('저장 완료', response);
      setEditable(false); // 저장 후 수정 불가능하게 상태 변경
    } catch (error) {
      console.error('오류 발생', error);
    }
  };

  // 닉네임 입력 변경 핸들러
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, nickname: e.target.value });
  };

  // 수정 버튼 클릭 핸들러
  const handleEditClick = () => {
    setEditable(true); // 수정 가능하도록 상태 변경
  };

  return (
    <>
      <div className={styles.mypageEdit_Header}>
        <div
          className={`${styles.mypage_Profile_image} ${styles.margin}`}
          style={{
            backgroundImage: selectedImage
              ? `url(${URL.createObjectURL(selectedImage)})`
              : undefined,
          }}
        ></div>
        <label className={styles.label} htmlFor="file">
          <div className={styles.label_Div}>프로필 변경</div>
        </label>
        <input
          className={styles.input}
          type="file"
          id="file"
          onChange={handleImageChange}
          accept="image/*"
        />
        {selectedImage && (
          <button className={styles.uploadButton} onClick={uploadImage}>
            업로드
          </button>
        )}
        <div className={styles.nick_Div}>
          {/* 수정 가능한 상태에 따라 input의 readonly 속성 적용 */}
          <input
            className={`${styles.mypage_Profile_nickname} ${
              !editable ? styles.centerText : ''
            }`}
            type="text"
            value={userData.nickname}
            onChange={handleNicknameChange}
            readOnly={!editable}
          />
          {/* 수정 가능한 상태에 따라 아이콘 클릭 가능 여부 결정 */}
          {!editable && (
            <div className={styles.nick_Icon} onClick={handleEditClick}>
              <img src="/edit2.png" alt="" />
            </div>
          )}
          {/* 수정 가능한 상태에 따라 저장 버튼 렌더링 */}
          {editable && (
            <div className={styles.nick_Icon} onClick={saveNickname}>
              <img src="/correct.png" alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MypageEditHeader;
