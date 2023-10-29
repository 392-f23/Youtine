import React, { useState } from 'react';
import './LoginPage.css';
import { signInWithGoogle } from '../utilities/firebase';

const LoginPage = () => {

    const handleGoogleLogin = () => {
        signInWithGoogle();
    }

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="/src/assets/Youtine_logo.png" alt="Youtine Logo" />
      </div>
      <h1>Youtine</h1>
      <p>Your daily routine tracker</p>
      <button className="get-started-button" onClick={handleGoogleLogin}>Get Started</button>
    </div>
  );
};

export default LoginPage;