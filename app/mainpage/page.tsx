import LocationWeather from './MapPage';
import Mainpage_button from '../../components/mainpage/Mainpage_button';
import styles from '../../styles/mainpage/mainpage.module.scss';
const MyPage: React.FC = () => {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.test}>
        <LocationWeather />
      </div>

      <div className={styles.mainbuttoncontainer}>
        <Mainpage_button />
      </div>
    </div>
  );
};

export default MyPage;
