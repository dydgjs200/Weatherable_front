'use client';

// pages/dimension/[category]
import { useState } from 'react';
import styles from '../../../../styles/Dimension/DimensionPage.module.scss';
import TopSize from '../../../../components/Dimension/TopSize';
import BottomSize from '../../../../components/Dimension/BottomSize';
import OuterSize from '../../../../components/Dimension/OuterSize';
import ShoesSize from '../../../../components/Dimension/ShoesSize';

interface DimensionProps {
  params: {
    category: string;
  };
}

const dimension: React.FC<DimensionProps> = ({ params }) => {
  // console.log({ params });
  const [selectedComponent, setSelectedComponent] = useState<String>('');

  const handleComponentChange = (component: String) => {
    setSelectedComponent(component);
  };
  const renderComponent = () => {
    switch (params.category) {
      case 'top':
        return <TopSize />;
      case 'bottom':
        return <BottomSize />;
      case 'outer':
        return <OuterSize />;
      case 'shoes':
        return <ShoesSize />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.components_Div}>
          <div
            className={styles.components}
            onClick={() => handleComponentChange('상의')}
          >
            상의
          </div>
          <div
            className={styles.components}
            onClick={() => handleComponentChange('하의')}
          >
            하의
          </div>
          <div
            className={styles.components}
            onClick={() => handleComponentChange('아우터')}
          >
            아우터
          </div>
          <div
            className={styles.components}
            onClick={() => handleComponentChange('신발')}
          >
            신발
          </div>
        </div>
        <div>안녕</div>
        {/* 이 부분 체크 */}
        {!selectedComponent && <div>{renderComponent()}</div>}
        {selectedComponent === '상의' && <TopSize />}
        {selectedComponent === '하의' && <BottomSize />}
        {selectedComponent === '아우터' && <OuterSize />}
        {selectedComponent === '신발' && <ShoesSize />}
      </div>
    </>
  );
};

export default dimension;