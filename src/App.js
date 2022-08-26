import './App.scss';
import { firebaseAuth } from 'firebase-config'
import { onAuthStateChanged } from 'firebase/auth';

export default function App({user}) {
  console.log(user)
  return (
    <div className='App'>
      {user.displayName ? 'HELLO ' + user.displayName : 'Who are you?'}
    </div>
  );
}
