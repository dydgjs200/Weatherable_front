import ClothesInfoBox from '../../../../../components/closet/clothesInfoBox';
import AddToggleBtn from '../../../../../components/closet/addToggleBtn';
import SelectBox from '../../../../../components/closet/selectBox';
import styles from '../../../../../styles/closet/closet.module.scss';
import SortBox from '../../../../../components/closet/sortBox';

export default function Closet() {
  return (
    <div className={styles.container}>
      <div className={styles.innerHeader}>
        <p>최진님의 옷장</p>
        <div>
          <button>
            <span className="material-symbols-outlined">bookmark</span>
          </button>
          <span>50</span>
        </div>
      </div>
      <div className={styles.selectBox}>
        <SelectBox />
      </div>
      <div className={styles.sortBox}>
        <SortBox />
      </div>
      <div className={styles.mainInfoBox}>
        <ClothesInfoBox />
      </div>
      <AddToggleBtn />
    </div>
  );
}
