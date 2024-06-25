import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import LoginForm from './components/LoginForm';
import AddFriend from './components/AddFriend';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <PrivateRoute path="/friends/add">
          <AddFriend />
        </PrivateRoute>
        <PrivateRoute path="/friends">
          <FriendsList />
        </PrivateRoute>
        <PrivateRoute path="/">
          <FriendsList />
        </PrivateRoute>
      </Switch>
    </AuthContextProvider>
  );
}

export default App;
