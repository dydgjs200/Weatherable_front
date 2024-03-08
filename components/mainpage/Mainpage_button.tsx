import styles from '../../styles/mainpage/mainpage.module.scss';
export default function Mainpagebutton() {
  return (
    <>
      <hr />
      <div className={styles.mainpage__TopButton}>
        <button className={styles.Tshirt}></button>
      </div>
      <div className={styles.mainpage__BottomButton}></div>
    </>
  );
}
