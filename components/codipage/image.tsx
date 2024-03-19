import React, { useState } from 'react';

interface Props {
  // 여기에 컴포넌트의 Props 인터페이스를 정의합니다
  imageSrc: string | null;
}

const MyComponent: React.FC<Props> = ({ imageSrc }) => {
  // 여기에 컴포넌트의 로직을 작성합니다.

  return <div>{imageSrc && <img src={imageSrc} alt="Selected Outfit" />}</div>;
};

export default MyComponent;
