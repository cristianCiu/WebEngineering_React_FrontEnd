
import Header from './Header';
// import Testclass from './test';

import './App.css';
import React, { useState } from "react";

function App() {
  const [isDarkMode, setDarkTheme] = useState(false);

  const toggleDarkMode = () => {
    setDarkTheme(isDarkMode ? false : true);
  }

  return (
    <div className={isDarkMode ? 'Dark-Theme App' : 'App'}>
      <Header />

      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <p className={isDarkMode ? 'Dark-Theme' : ''}>My Mode {isDarkMode}</p>

    </div>

  );
}


export default App;

