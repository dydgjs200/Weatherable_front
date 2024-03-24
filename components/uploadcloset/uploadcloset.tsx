'use client';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/closet/closet.module.scss';
import SelectBox from '../../components/closet/closet_main/selectBox';
import SortBox from '../../components/closet/closet_main/sortBox';
import ClothesInfoBox from '../../components/uploadcloset/uploadClosetInfoBox';

import { useSelector } from 'react-redux';
import { getUserClothes } from '../../service/closetApiService'; // 올바른 경로로 수정 필요

// ClothesInfoBoxComponent 컴포넌트의 속성 타입 정의
interface ClosetPageProps {
  onImageSelect: (imageSrc: string, index: number) => void;
  clothes?: {
    imagePath: string;
    id: number;
    productName: string;
  };
}

// ClothesInfoBoxComponent 컴포넌트 정의
const ClothesInfoBoxComponent: React.FC<ClosetPageProps> = ({
  onImageSelect,
}) => {
  // 사용자 옷 데이터와 정렬 상태를 관리하는 상태
  const [userClothesData, setUserClothesData] = useState<any[]>([]);
  const sortStatus = useSelector((state: any) => state.status.status);

  // 컴포넌트가 마운트될 때 사용자의 옷 데이터를 가져오는 효과
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserClothes(); // 서버에서 사용자의 옷 데이터를 가져옵니다.
        setUserClothesData(data); // 가져온 데이터로 상태를 업데이트합니다.
      } catch (error) {
        console.error('사용자 옷 데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData(); // 데이터를 가져오는 함수 호출
  }, []);

  return (
    <div className={styles.container}>
      {/* 선택 상자 컴포넌트 렌더링 */}
      <div className={styles.selectBox}>
        <SelectBox />
      </div>
      {/* 정렬 상자 컴포넌트 렌더링 */}
      <div className={styles.sortBox}>
        <SortBox />
      </div>
      {/* 사용자의 옷 데이터를 표시하는 옷 정보 상자 컴포넌트 렌더링 */}
      <div
        className={
          sortStatus ? styles.mainInfoBoxDefault : styles.mainInfoBoxSmall
        }
      >
        {userClothesData.map((clothesItem, index) => (
          <ClothesInfoBox
            key={clothesItem.id}
            clothes={clothesItem}
            index={index} // 인덱스를 전달합니다.
            onImageSelect={(imageSrc: string, index: number) =>
              onImageSelect(imageSrc, index)
            } // 이미지를 선택할 때 호출될 함수를 전달합니다.
          />
        ))}
      </div>
    </div>
  );
};

export default ClothesInfoBoxComponent;
