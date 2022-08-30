import './App.scss';
import DateSelectingCalendar from 'components/calendar/DateSelectingCalendar';

export default function App({user}) {
  return (
    <div className='App'>
      <DateSelectingCalendar />
      {user?.displayName ? 'HELLO ' + user?.displayName : 'Who are you?'}
    </div>
  );
}
