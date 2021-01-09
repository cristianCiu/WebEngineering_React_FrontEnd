import Header from './Header';
import '../styles/App.css';
import React, { useState } from "react";
import { Button } from 'react-bootstrap';
function App() {
  const [isDarkMode, setDarkTheme] = useState(false);

  const toggleDarkMode = () => {
    setDarkTheme(isDarkMode ? false : true);
  }

  return (
    <div className={isDarkMode ? 'Dark-Theme App' : 'App'}>
      <Header />

      <Button variant="outline-dark" onClick={toggleDarkMode}>Toggle Dark Mode</Button>

    </div>

  );
}
export default App;

