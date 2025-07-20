import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Greeting({ isLoggedIn = false }) {
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome, hero! 🧙‍♂️</h2>
      ) : (
        <h2>Access denied. Please sign in! 🧟‍♂️</h2>
      )}
    </div>
  );
}

export default Greeting
