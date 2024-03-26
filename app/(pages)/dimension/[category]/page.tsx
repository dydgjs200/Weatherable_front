'use client';

// pages/dimension/[category]
import { useEffect, useState } from 'react';
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

const dimensionCategory: React.FC<DimensionProps> = ({ params }) => {
  // console.log({ params });
  const [selectedComponent, setSelectedComponent] = useState<String>('');

  // *before
  // const handleComponentChange = (component: String) => {
  //   setSelectedComponent(component);
  // };

  // *after
  const handleComponentChange = (component: string) => {
    // 모든 components 요소에서 changedComponent2 클래스를 제거합니다.
    const components = document.querySelectorAll(`.${styles.components}`);
    components.forEach((component) => {
      component.classList.remove(styles.changedComponent2);
    });

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

  // 리렌더링 시켜주면서 해당 컴포넌트에 해당하는 div에 class 추가해주기.
  useEffect(() => {
    const components = document.querySelectorAll(`.${styles.components}`);

    // 모든 components 요소에서 changedComponent2 클래스를 제거합니다.
    components.forEach((component) => {
      component.classList.remove(styles.changedComponent2);
    });

    // 선택된 컴포넌트에 changedComponent2 클래스를 추가합니다.
    switch (params.category) {
      case 'top':
        document
          .querySelector(`.${styles.components}:nth-child(1)`)
          .classList.add(styles.changedComponent2);
        break;
      case 'bottom':
        document
          .querySelector(`.${styles.components}:nth-child(2)`)
          .classList.add(styles.changedComponent2);
        break;
      case 'outer':
        document
          .querySelector(`.${styles.components}:nth-child(3)`)
          .classList.add(styles.changedComponent2);
        break;
      case 'shoes':
        document
          .querySelector(`.${styles.components}:nth-child(4)`)
          .classList.add(styles.changedComponent2);
        break;
      default:
        break;
    }
  }, [params.category]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.components_Div}>
          <div
            className={`${styles.components} ${
              selectedComponent === '상의' ? styles.changedComponent : ''
            }`}
            onClick={() => handleComponentChange('상의')}
          >
            상의
          </div>
          <div
            className={`${styles.components} ${
              selectedComponent === '하의' ? styles.changedComponent : ''
            }`}
            onClick={() => handleComponentChange('하의')}
          >
            하의
          </div>
          <div
            className={`${styles.components} ${
              selectedComponent === '아우터' ? styles.changedComponent : ''
            }`}
            onClick={() => handleComponentChange('아우터')}
          >
            아우터
          </div>
          <div
            className={`${styles.components} ${
              selectedComponent === '신발' ? styles.changedComponent : ''
            }`}
            onClick={() => handleComponentChange('신발')}
          >
            신발
          </div>
        </div>
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

export default dimensionCategory;
