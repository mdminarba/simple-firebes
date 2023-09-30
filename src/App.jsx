import { useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import './App.css'
import app from './firebase/firebase.config';
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
function App() {
  const [user, setuser] = useState(null)
const handleGoogleSisnIn = ()=>{
  signInWithPopup(auth, googleProvider)
  .then(result=>{
    const loggeUser = result.user
    console.log(loggeUser)
    setuser(loggeUser)
  })
  .catch(error=>{
    console.log(error)
  })
}

  return (
    <>
   
      <button onClick={handleGoogleSisnIn}>goolge Sing In</button>
      <h1>Firebase + React</h1>
      {
        user &&
        <div className="card">
          <h2 className="">User: {user.displayName}</h2>
          <h2 className="">User: {user.email}</h2>
        </div>
      }

    </>
  )
}

export default App
