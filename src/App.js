
import Header from './Header';
import Testbutton from './test';
import Chart from './Chart';
import './App.css';
import React,{useState} from "react";

function App() {
  const [isDarkMode, setDarkTheme] = useState(false);

  const switchToDarkMode = () => {
setDarkTheme(isDarkMode ?   false:true);
  }

  return (
    <div className="App">
      <Header/>
      <button onClick={switchToDarkMode}>Toggle Dark Mode</button>
  <h1 className={isDarkMode ? 'Dark-Theme' : ''}>My Mode: {isDarkMode}</h1>
     
     <Testbutton />
     <Chart/>
    </div>
    
  );
}


export default App;
