'use client';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/codi/codi.module.scss';
import styles2 from '../../styles/codi/codi2.module.scss';
import Cookies from 'js-cookie';
import axios from 'axios';
import { cookiesend } from '../../service/codiApiservice';
import ClosetPage from '../../components/uploadcloset/uploadcloset';
import { getCodiInfo } from '../../service/getCodiInfoApi';
import MyComponent from '../codipage/image';
import { RootState } from '../../Store/Store';
// 선택된 날짜를 URL에서 추출하는 함수
function extractSelectedDateFromURL() {
  if (typeof window !== 'undefined') {
    const url = window.location.href;
    const queryString = url.split('?')[1];
    if (!queryString) return null;

    const queryParams = queryString.split('&');

    for (const param of queryParams) {
      if (param.startsWith('selectedDate=')) {
        const selectedDate = param.split('=')[1];
        return decodeURIComponent(selectedDate);
      }
    }
  }

  return null;
}
const CodiPage: React.FC<{}> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndexes, setSelectedIndexes] = useState<{
    [key: string]: number | null;
  }>({
    capIndex: null,
    topIndex: null,
    outerIndex: null,
    bottomIndex: null,
    shoesIndex: null,
    accessoryIndex: null,
  });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<{
    [key: string]: string | null;
  }>({
    capIndex: null,
    topIndex: null,
    outerIndex: null,
    bottomIndex: null,
    shoesIndex: null,
    accessoryIndex: null,
  });
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [codiName, setCodiName] = useState<string>('');
  const [codiInfo, setCodiInfo] = useState<any>(null); // 코디 정보 상태 추가

  const userId = useSelector((state: RootState) => state.user.userId);

  useEffect(() => {
    const extractedDate = extractSelectedDateFromURL();
    if (extractedDate) {
      const formattedDate = new Date(extractedDate).toISOString();
      setSelectedDate(formattedDate);
      console.log('페이지 selectedDate:', formattedDate);
    }
    getCodiData(); // 페이지 로드시 코디 정보 가져오기 함수 호출
  }, []);
  const getCodiData = async () => {
    try {
      const codiInfo = await getCodiInfo({});
      console.log('초기 코디 정보:', codiInfo);
      // 받아온 코디 정보를 상태에 저장
      setCodiInfo(codiInfo);
      const targetCodi = codiInfo.find(
        (item) => item.codiDate === '2024-03-25T15:00:00'
      );
      console.log(targetCodi);
    } catch (error) {
      console.error('초기 코디 정보 요청 실패: ', error);
    }
  };

  const openModal = (category: string) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageSelect = (imageSrc: string, id: number) => {
    // ID를 전달받도록 수정
    const updatedSelectedIndexes = { ...selectedIndexes };
    updatedSelectedIndexes[selectedCategory!] = id; // 선택된 옷의 ID로 업데이트
    setSelectedIndexes(updatedSelectedIndexes);
    setSelectedImages({ ...selectedImages, [selectedCategory!]: imageSrc });
    closeModal();
  };

  const handleRegister = async () => {
    try {
      const codiDTO = { ...selectedIndexes, codiName, selectedDate, userId };
      codiDTO['codiDate'] = new Date(codiDTO['selectedDate']).toISOString();
      await cookiesend(codiDTO);
      alert('등록되었습니다.');
    } catch (error) {
      console.error('데이터 전송 실패: ', error);
      alert('등록에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div>
      <div className={styles2.container}>
        <div
          className={styles2.uploadButtonHat}
          onClick={() => openModal('topIndex')}
        >
          {' '}
          {selectedIndexes['topIndex'] !== null ? (
            <MyComponent
              // imageindex={`${selectedIndexes['topIndex']}`}
              imageSrc={`${selectedImages['topIndex']}`}
              onClick={() => openModal('topIndex')} // onClick prop을 전달합니다.
            />
          ) : (
            '상의'
          )}
        </div>
        <div
          className={styles2.uploadButtonHat}
          onClick={() => openModal('bottomIndex')}
        >
          {' '}
          {selectedIndexes['bottomIndex'] !== null ? (
            <MyComponent
              // imageindex={`${selectedIndexes['bottomIndex']}`}
              imageSrc={`${selectedImages['bottomIndex']}`}
              onClick={() => openModal('bottomIndex')} // onClick prop을 전달합니다.
            />
          ) : (
            '하의'
          )}
        </div>
        <div
          className={styles2.uploadButtonHat}
          onClick={() => openModal('outerIndex')}
        >
          {' '}
          {selectedIndexes['outerIndex'] !== null ? (
            <MyComponent
              // imageindex={`${selectedIndexes['outerIndex']}`}
              imageSrc={`${selectedImages['outerIndex']}`}
              onClick={() => openModal('outerIndex')} // onClick prop을 전달합니다.
            />
          ) : (
            '아우터'
          )}
        </div>
        <div
          className={styles2.uploadButtonHat}
          onClick={() => openModal('shoesIndex')}
        >
          {' '}
          {selectedIndexes['shoesIndex'] !== null ? (
            <MyComponent
              // imageindex={`${selectedIndexes['shoesIndex']}`}
              imageSrc={`${selectedImages['shoesIndex']}`}
              onClick={() => openModal('shoesIndex')} // onClick prop을 전달합니다.
            />
          ) : (
            '신발'
          )}
        </div>
        <div
          className={styles2.uploadButtonHat}
          onClick={() => openModal('accessoryIndex')}
        >
          {' '}
          {selectedIndexes['accessoryIndex'] !== null ? (
            <MyComponent
              // imageindex={`${selectedIndexes['accessoryIndex']}`}
              imageSrc={`${selectedImages['accessoryIndex']}`}
              onClick={() => openModal('accessoryIndex')} // onClick prop을 전달합니다.
            />
          ) : (
            '악세사리'
          )}
        </div>
        <div
          className={styles2.uploadButtonHat}
          onClick={() => openModal('capIndex')}
        >
          {' '}
          {selectedIndexes['capIndex'] !== null ? (
            <MyComponent
              // imageindex={`${selectedIndexes['모자']}`}
              imageSrc={`${selectedImages['capIndex']}`}
              onClick={() => openModal('capIndex')} // onClick prop을 전달합니다.
            />
          ) : (
            '모자'
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <button onClick={closeModal}>Close Modal</button>
          <div className={styles.modalContent}>
            <ClosetPage onImageSelect={handleImageSelect} />
          </div>
        </div>
      )}
      <input
        type="text"
        value={codiName}
        onChange={(e) => setCodiName(e.target.value)}
        placeholder="코디 이름을 입력하세요."
      />
      <div>
        <button onClick={handleRegister}>등록하기</button>
      </div>
    </div>
  );
};

export default CodiPage;
