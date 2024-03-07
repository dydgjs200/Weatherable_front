"use client"; // nextjs에서 useState사용시 작성필
import React, { useEffect, useState } from "react";
import axios from "axios";

interface WeatherData {
  main: {
    temp: number;
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
        const apiKey = "08975c8087262a4eac397c8f4dca5edc";
        const apiURI = `http://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${apiKey}`;
        const response = await axios.get<WeatherData>(apiURI);
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
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
      maximumAge: 60 * 1000, // 이전 위치를 최대 1분까지 유지합니다.
      timeout: 10 * 1000, // 위치를 가져오는 데 최대 10초까지 시도합니다.
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
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Location: {weatherData?.name}</p>
          <p>
            Temperature: {Math.round((weatherData?.main.temp - 273) * 10) / 10}
            °C
          </p>

          <p>Description: {weatherData?.weather[0].description}</p>
          <p>Country: {weatherData?.sys.country}</p>
        </>
      )}
    </div>
  );
};

export default LocationWeather;
