import React, { useState, useEffect } from 'react';
import './App.css';

import HomePage from './pages/homepage/HomePage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shops/Shop.jsx';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-sign-up/SignInAndSignUp.jsx';
import { auth } from './firebase/firebase.util';

function onAuthStateChange(callback) {
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
      callback({ currentUser: { ...user } });
    } else {
      callback(null);
    }
  });
}

const App = () => {
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUserObj);
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(userObj);
  return (
    <div>
      <Header currentUser={userObj} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
};

export default App;
