import './App.scss';
import Header from 'components/header/Header';
import DateSelectingCalendar from 'components/calendar/DateSelectingCalendar';

export default function App({user}) {
  return (
    <div className='App'>
      <Header user={user} />
      <DateSelectingCalendar />
      {user?.displayName ? 'HELLO ' + user?.displayName : 'Who are you?'}
    </div>
  );
}
