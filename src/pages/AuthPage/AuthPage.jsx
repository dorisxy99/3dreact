import React, { useState } from 'react';
import SignUp from '../../components/SignUp/SignUp';
import LogIn from '../../components/LogIn/LogIn';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main>
    { showSignUp ?
        <SignUp setUser={setUser} />
        :
        <LogIn setUser={setUser} />
      }
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>

    </main>
  );
}