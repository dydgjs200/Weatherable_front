import React from 'react';
import Styles2 from '../../styles/codi/codi2.module.scss';

interface MyComponentProps {
  imageSrc: string;
  onClick?: () => void; // onClick prop 추가
}

const MyComponent: React.FC<MyComponentProps> = ({ imageSrc, onClick }) => {
  return (
    <div onClick={onClick}>
      {' '}
      {/* 클릭 이벤트 처리 */}
      <img className={Styles2.img} src={imageSrc} alt="Image" />
    </div>
  );
};

export default MyComponent;
