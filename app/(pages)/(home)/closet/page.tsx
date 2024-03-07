import AddToggleBtn from '../../../../components/closet/addToggleBtn';
import styles from '../../../../styles/closet/closet.module.scss';

export default function Closet() {
  return (
    <div className={styles.container}>
      <span>최진님의 옷장</span>
      <AddToggleBtn />
    </div>
  );
}
