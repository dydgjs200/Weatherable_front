import AddToggleBtn from '../../../../../components/closet/addToggleBtn';
import SelectBox from '../../../../../components/closet/selectBox';
import styles from '../../../../../styles/closet/closet.module.scss';

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
      <SelectBox />
      <AddToggleBtn />
    </div>
  );
}
