import React from 'react';
import HomePage from './pages/homepage.component';
import './App.css';
import { Route,Switch } from 'react-router-dom';


/**
 * ! Directory is the component holding everything
 * ! menu-item is each option like hats jackets etc
 * ! content is button inside each menu-item
 */

 const HatsPage = () => (
    <div>
      <h1>Welcom to HatsPage!</h1>
    </div>
 );

 /**
  * *we normally render the component in this sytnax before <HomePage/>
  * *but inside Route we are passing the component in this syntax component={HomePage}
  */
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop/hats' component={HatsPage}/>
      </Switch>
     
    </div>
  );
}

export default App;
