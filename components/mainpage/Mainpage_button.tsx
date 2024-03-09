import styles from '../../styles/mainpage/mainpage.module.scss';
export default function Mainpagebutton() {
  return (
    <>
      <hr />
      <div className={styles.mainpage__TopButton}>
        <button className={styles.Tshirt}></button>
        <button className={styles.Pants}></button>
        <button className={styles.Outer}></button>
      </div>
      <div className={styles.mainpage__BottomButton}>
        <button className={styles.Ai}></button>
        <button className={styles.Report}></button>
      </div>
    </>
  );
}
