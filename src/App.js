import './App.scss';
import { firebaseAuth } from 'firebase-config'
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  let displayName;
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      displayName = user.displayName
    }
  })
  return (
    <div className='App'>
      {'HELLO ' + firebaseAuth.currentUser.displayName}
    </div>
  );
}

export default App;
