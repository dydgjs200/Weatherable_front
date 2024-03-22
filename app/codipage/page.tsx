import Styles from '../../styles/calendar/calendar.module.scss';
import Codicomponent from '../../components/codipage/codicomponent';
import SelectedDateDisplay from '../../components/codipage/date';

const CodiPage: React.FC<{ selectedDate: string }> = ({ selectedDate }) => {
  return (
    <div>
      <h1>코디 페이지</h1>
      <SelectedDateDisplay selectedDate={selectedDate} />
      <Codicomponent />
    </div>
  );
};

export default CodiPage;
