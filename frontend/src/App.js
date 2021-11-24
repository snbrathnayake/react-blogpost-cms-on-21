import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/home-page/HomePage';
import LoginPage from './pages/login-page/LoginPage';
import RegisterPage from './pages/register-page/RegisterPage';
import SettingsPage from './pages/settings-page/SettingsPage';
import SinglePage from './pages/single-page/SinglePage';
import ContactPage from './pages/contact-page/ContactPage';
import WritePage from './pages/write-page/WritePage';

function App() {
  const user = !true;

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/register'>{user ? <Redirect to='/' /> : <RegisterPage />}</Route>
        <Route path='/login'>{user ? <Redirect to='/' /> : <LoginPage />}</Route>
        <Route path='/write'>{!user ? <Redirect to='/login' /> : <WritePage />}</Route>
        <Route path='/settings'>{user ? <SettingsPage /> : <Redirect to='/login' />}</Route>
        <Route path='/contact'>
          <ContactPage />
        </Route>
        <Route exact path='/post/:id'>
          <SinglePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
