import React from 'react';
import HomePage from './pages/homepage.component';
import './App.css';


/**
 * ! Directory is the component holding everything
 * ! menu-item is each option like hats jackets etc
 * ! content is button inside each menu-item
 */
function App() {
  return (
    <div className="App">
     <HomePage/>
    </div>
  );
}

export default App;
