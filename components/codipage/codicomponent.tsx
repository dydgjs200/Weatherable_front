'use client';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/codi/codi.module.scss';
import styles2 from '../../styles/codi/codi2.module.scss';
import Cookies from 'js-cookie';
import axios from 'axios';
import { cookiesend } from '../../service/codiApiservice';
import ClosetPage from '../../components/uploadcloset/uploadcloset';
import MyComponent from '../codipage/image';

// 선택된 날짜를 URL에서 추출하는 함수
function extractSelectedDateFromURL() {
  // window 객체의 존재 여부 확인
  if (typeof window !== 'undefined') {
    const url = window.location.href; // 현재 페이지의 URL을 가져옴

    // URL에서 '?' 다음의 문자열을 추출
    const queryString = url.split('?')[1];
    if (!queryString) return null; // '?' 이후의 문자열이 없으면 null 반환

    // queryString을 '&' 기준으로 나누어 배열로 변환
    const queryParams = queryString.split('&');

    // queryParams에서 selectedDate 부분을 찾아 반환
    for (const param of queryParams) {
      if (param.startsWith('selectedDate=')) {
        const selectedDate = param.split('=')[1];
        return decodeURIComponent(selectedDate);
      }
    }
  }

  return null; // window 객체가 없거나 selectedDate가 없으면 null 반환
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

  useEffect(() => {
    const extractedDate = extractSelectedDateFromURL();
    setSelectedDate(extractedDate);
  }, []);

  const openModal = (category: string) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageSelect = (imageSrc: string, index: number) => {
    const updatedSelectedIndexes = { ...selectedIndexes };
    updatedSelectedIndexes[selectedCategory!] = index;
    setSelectedIndexes(updatedSelectedIndexes);
    setSelectedImages({ ...selectedImages, [selectedCategory!]: imageSrc });
    closeModal();
  };

  const handleRegister = async () => {
    try {
      // // 쿠키에서 데이터 가져오기
      // const selectedDataString = Cookies.get('selectedIndexes');
      // if (!selectedDataString) {
      //   throw new Error('쿠키에서 데이터를 가져올 수 없습니다.');
      // }

      // // 쿠키에 저장된 JSON 문자열을 객체로 파싱
      // const codiDTO = JSON.parse(selectedDataString);

      // 쿠키에 저장된 데이터를 백엔드로 전송
      await cookiesend(selectedIndexes);

      alert('등록되었습니다.');
    } catch (error) {
      console.error('데이터 전송 실패: ', error);
      // 에러가 발생했을 때 사용자에게 알림
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
      <div>
        <button onClick={handleRegister}>등록하기</button>
      </div>
    </div>
  );
};

export default CodiPage;
