import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { createUserProfileDocument } from "./firebase/firebase.utils";
import { auth } from "./firebase/firebase.utils";

/**
 * ! Directory is the component holding everything
 * ! menu-item is each option like hats jackets etc
 * ! content is button inside each menu-item
 */

/**
 * *we normally render the component in this sytnax before <HomePage/>
 * *but inside Route we are passing the component in this syntax component={HomePage}
 */

/*we changed from functional component to class component 
  to keep the current user from firebase authentication in our current state
   */
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  // setting a class variable to unsubscribe from authstatechanged function
  unsubscribeFromAuth = null;

  /*we want to track user once our application is mounted 
    onAuthStateChanged returns a function to unsubscribe */
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser:{
            id: snapshot.id,
            ...snapshot.data()
            }
          });
        });
      }

     
      //if userAuth comes null then we are setting our state object currentuser to null.
      else{
        this.setState({currentUser: userAuth});
      }

    });
  }

  /*we want to unsubscribe before we unmount the application */
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
