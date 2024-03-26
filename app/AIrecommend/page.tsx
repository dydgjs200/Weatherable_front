'use client';

import { useEffect, useState } from 'react';
import { getUserClothes, aiRecommendGet } from '../../service/closetApiService';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
interface clothes {
  brand: string;
  color: string | null;
  createdAt: string;
  id: number;
  imagePath: string;
  liked: boolean;
  majorCategory: string;
  middleCategory: string;
  nickname: string;
  price: number;
  productName: string;
  score: number;
  season: string;
  size: string;
  style: string;
  thickness: string;
  user_id: number;
  userid: string;
}

export default function AiRecommend() {
  const router = useRouter();

  // 유저 옷 정보 저장
  const [isUserData, setIsUserData] = useState<clothes[]>([]);

  // 날씨 데이터 받아오기
  const weatherData = useSelector((state: any) => ({
    temp: state.aiRecommend.weather.temp,
    weather: state.aiRecommend.weather.weather,
  }));
  console.log(weatherData);

  // Ai 전달용 데이터
  const [isAiData, setIsAiData] = useState('');

  useEffect(() => {
    // 날씨 정보가 없으면 뒤로가기 (너무 빨리 접속 시 날씨 데이터를 못불러옴)
    if (weatherData.temp == 0) {
      alert('온도 정보가 없습니다! 메인 화면에서 온도 정보를 불러와주세요');
      router.back();
    } else if (weatherData.weather == '') {
      alert('날씨 정보가 없습니다! 메인 화면에서 날씨 정보를 불러와주세요');
      router.back();
    }
    const fetchData = async () => {
      try {
        // 유저 옷 정보 불러오기
        const userClothData = await getUserClothes();
        setIsUserData(userClothData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // if (isUserData.length === 0) {
  //   return <div>Loading...</div>;
  // }

  useEffect(() => {
    const transformedData: any = {
      weather: [weatherData.temp, weatherData.weather],
    };

    const groupByData = (isUserData: clothes[]) => {
      return isUserData.reduce((groups: any, item: clothes) => {
        let category: string;
        switch (item.majorCategory) {
          case 'Top':
          case 'Outer':
          case 'Shoes':
          case 'Accessory':
            category = item.majorCategory;
            break;
          case 'Pants':
          case 'Skirt':
          case 'Onepiece':
            category = 'Bottom';
        }

        if (!groups[category]) {
          groups[category] = [];
        }
        groups[category].push([item.productName, item.middleCategory]);
        return groups;
      }, {});
    };
    const newGroup = groupByData(isUserData);

    for (const category in newGroup) {
      transformedData[category] = newGroup[category];
    }

    setIsAiData(transformedData);
  }, [isUserData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(isAiData);
        const userClothData = await aiRecommendGet(isAiData);
        console.log(userClothData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [isAiData]);

  return (
    <div>
      <span> 해보자 해보자</span>
      <span> 가보자 가보자 </span>
    </div>
  );
}
