import './App.scss';
import Header from 'components/header/Header';
import DateSelectingCalendar from 'components/calendar/DateSelectingCalendar';

export default function App({user}) {
  console.log(user)
  return (
    <div className='App'>
      <Header />
      <DateSelectingCalendar />
      {user?.displayName ? 'HELLO ' + user?.displayName : 'Who are you?'}
    </div>
  );
}
