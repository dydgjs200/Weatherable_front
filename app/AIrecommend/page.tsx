'use client';

import { useEffect, useState } from 'react';
import { getUserClothes, aiRecommendGet } from '../../service/closetApiService';
import { useSelector } from 'react-redux';

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
  const [isUserData, setIsUserData] = useState<clothes[]>([]);
  const weatherData = useSelector((state: any) => ({
    temp: state.aiRecommend.weather.temp,
    weather: state.aiRecommend.weather.weather,
  }));
  const [isData, setIsData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userClothData = await getUserClothes();
        setIsUserData(userClothData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(weatherData);

  if (isUserData.length === 0) {
    return <div>Loading...</div>;
  }

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

    setIsData(transformedData);
  }, [isUserData, weatherData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userClothData = await aiRecommendGet(isData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [isData]);

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

  const transformedData: any = {
    weather: [weatherData.temp, weatherData.weather],
  };

  for (const category in newGroup) {
    transformedData[category] = newGroup[category];
  }

  setIsData(transformedData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userClothData = await aiRecommendGet(isData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [isData]);

  return (
    <div>
      <span> 해보자 해보자</span>
      <span> 가보자 가보자 </span>
    </div>
  );
}
