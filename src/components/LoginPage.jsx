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
        <img src="https://firebasestorage.googleapis.com/v0/b/youtine-7ea21.appspot.com/o/Youtine_logo.png?alt=media&token=5db9d573-0b71-4e90-80c8-d26baff4c6fc&_gl=1*xkid0f*_ga*MTMyMzY3NDkyOS4xNjk1MjQxMTI4*_ga_CW55HF8NVT*MTY5ODYzMjI3Ni44LjEuMTY5ODYzMjQ2My41Ni4wLjA." alt="Youtine Logo" />
      </div>
      <h1>Youtine</h1>
      <p>Your daily routine tracker</p>
      <button className="get-started-button" onClick={handleGoogleLogin}>Get Started</button>
    </div>
  );
};

export default LoginPage;