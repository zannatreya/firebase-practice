import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';


const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log('error', error);

      });
  }

  return (
    <div className="App">

      {
        user.email ? <button onClick={handleGoogleSignOut}>sign out</button>

          : <button onClick={handleGoogleSignIn}>sign in</button>

      }

      <h1>name: {user.displayName}</h1>
      <p>email: {user.email}</p>
    </div>
  );
}

export default App;
