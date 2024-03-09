'use client'; // nextjs에서 useState사용시 작성필
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../styles/mainpage/mainpage.module.scss';

interface WeatherData {
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
  clouds: {
    all: number;
  };
  name: string;
}

const LocationWeather: React.FC = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 사용자의 위치 정보를 가져오기
        const position = await getLocation();
        setLocation(position);

        // 날씨 데이터 가져오기
        const apiKey = '15c5ec95f74fa746cc03e71ed9b610f5';
        const apiURI = `http://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${apiKey}`;
        const response = await axios.get<WeatherData>(apiURI);
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  // 사용자의 위치 정보를 가져오는 함수
  const getLocation = async (): Promise<{
    latitude: number;
    longitude: number;
  }> => {
    const options: PositionOptions = {
      maximumAge: 60 * 1000,
      timeout: 10 * 1000,
    };

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        },
        options
      );
    });
  };

  const iconUrl = `http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`;
  const temperatureText = weatherData?.main.temp
    ? Math.round((weatherData.main.temp - 273) * 10) / 10
    : null;

  const getTemperatureDescription = (temperature: number) => {
    if (temperature <= 0) {
      return '날이 매우 추우니 옷을 따듯하게 입으세요';
    } else if (temperature <= 10) {
      return '날이 쌀쌀하니 가벼운 겉옷을 챙기세요';
    } else if (temperature <= 20) {
      return '날이 따듯한 편이니 겉옷은 안챙겨도 괜찮아요';
    } else {
      return '날이 매우 더우니 반팔을 추천해요';
    }
  };
  return (
    <div className={styles.weatherContainer}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={styles.weatherIcon}>
            <img src={iconUrl} alt="Weather Icon" />
          </div>
          <p className={styles.locationText}>
            {weatherData?.name + '.' + weatherData?.sys.country}
          </p>
          <p className={styles.temperatureText}>
            {Math.round((weatherData?.main.temp - 273) * 10) / 10}
            °C
          </p>
          <p className={styles.temperatureText}>
            <span style={{ color: 'red' }}>
              ▲{Math.round((weatherData?.main.temp_max - 273) * 10) / 10}°C
            </span>{' '}
            &nbsp; {} &nbsp; {} &nbsp; {} &nbsp; {} &nbsp; {}
            <span style={{ color: 'blue' }}>
              ▼{Math.round((weatherData?.main.temp_min - 273) * 10) / 10}°C
            </span>{' '}
          </p>
          <hr />
          <p className={styles.temperatureText}>
            {temperatureText ? (
              <>{getTemperatureDescription(temperatureText)}</>
            ) : null}
          </p>
        </>
      )}
    </div>
  );
};

export default LocationWeather;
