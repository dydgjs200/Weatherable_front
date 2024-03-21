// MyComponent.tsx
import React from 'react';
import styles2 from '../../styles/codi/codi2.module.scss';
interface MyComponentProps {
  imageSrc: string;
  onClick: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ imageSrc, onClick }) => {
  return (
    <div>
      <img
        className={styles2.img}
        src={imageSrc}
        alt="Image"
        onClick={onClick}
      />
    </div>
  );
};

export default MyComponent;
