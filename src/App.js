import React, { useState, useEffect } from 'react';
import './App.css';

import HomePage from './pages/homepage/HomePage';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shops/Shop.jsx';
import Header from './components/header/Header';
import CheckoutPage from './pages/checkoutpage/CheckoutPage';
import SignInAndSignUp from './pages/sign-in-sign-up/SignInAndSignUp.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

import { useSelector, useDispatch } from 'react-redux';
import * as userActions from './redux/user/user.actions';

function onAuthStateChange(callback, action) {
  auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot((snapShot) => {
        callback(action({ id: snapShot.id, ...snapShot.data() }));
      });
    } else {
      callback(action(null));
    }
  });
}

const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChange(dispatch, userActions.setCurrentUser);

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
