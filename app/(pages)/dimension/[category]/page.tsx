'use client';

// import { useState } from 'react';
// import styles from '../../../styles/Dimension/DimensionPage.module.scss';
// import TopSize from '../../../components/Dimension/TopSize';
// import BottomSize from '../../../components/Dimension/BottomSize';
// import OuterSize from '../../../components/Dimension/OuterSize';
// import ShoesSize from '../../../components/Dimension/ShoesSize';

// function DimensionPage() {
//   const [selectedComponent, setSelectedComponent] = useState('');

//   const handleComponentChange = (component) => {
//     setSelectedComponent(component);
//   };

//   return (
//     <>
//       <div className={styles.container}>
//         <div className={styles.components_Div}>
//           <div
//             className={styles.components}
//             onClick={() => handleComponentChange('상의')}
//           >
//             상의
//           </div>
//           <div
//             className={styles.components}
//             onClick={() => handleComponentChange('하의')}
//           >
//             하의
//           </div>
//           <div
//             className={styles.components}
//             onClick={() => handleComponentChange('아우터')}
//           >
//             아우터
//           </div>
//           <div
//             className={styles.components}
//             onClick={() => handleComponentChange('신발')}
//           >
//             신발
//           </div>
//         </div>
//         {selectedComponent === '상의' && <TopSize />}
//         {selectedComponent === '하의' && <BottomSize />}
//         {selectedComponent === '아우터' && <OuterSize />}
//         {selectedComponent === '신발' && <ShoesSize />}
//       </div>
//     </>
//   );
// }

// export default DimensionPage;

// pages/dimension/[category]
import TopSize from '../../../../components/Dimension/TopSize';
import BottomSize from '../../../../components/Dimension/BottomSize';
import OuterSize from '../../../../components/Dimension/OuterSize';
import ShoesSize from '../../../../components/Dimension/ShoesSize';

const dimension = ({ params }) => {
  console.log({ params });

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
      <div>{renderComponent()}</div>
    </>
  );
};

export default dimension;
