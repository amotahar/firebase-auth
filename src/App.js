import './App.css';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

function App() {

  const [user, setUser ] = useState({});

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
    .then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    }).catch((error) => {
      console.log(error);
    });
  }

  const handleSignOut = () => {
    signOut(auth)
    .then(()=>{
      setUser({});
    })
  
  .catch(()=>{
     setUser({});
     
    })
    }
  return (
    <div className="App">
         { user.email?
          <button onClick={handleSignOut}>SignOut</button>
          :
          <>
          <button onClick={handleGoogleSignIn}>Google</button>
          <button onClick={handleGitHubSignIn}>GitHub</button>
          </>

          }

        { 
         
         user && <>
         <h2>Name: {user.displayName}</h2>
         <p>Email: {user.email}</p>
         <p>ID: {user.uid}</p>
         <img src= {user.photoURL} alt="" />
         
         </>
         }
    </div>
  );
}

export default App;
