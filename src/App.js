import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import './App.css';
import { Route,Switch } from 'react-router-dom';


/**
 * ! Directory is the component holding everything
 * ! menu-item is each option like hats jackets etc
 * ! content is button inside each menu-item
 */

 /**
  * *we normally render the component in this sytnax before <HomePage/>
  * *but inside Route we are passing the component in this syntax component={HomePage}
  */
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
      </Switch>
     
    </div>
  );
}

export default App;
