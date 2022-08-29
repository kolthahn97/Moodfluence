import './App.scss';
import Header from 'components/header/Header';

export default function App({user}) {
  console.log(user)
  return (
    <div className='App'>
      <Header />
      {user.displayName ? 'HELLO ' + user.displayName : 'Who are you?'}
    </div>
  );
}
