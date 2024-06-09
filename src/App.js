import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import PrivateRoute from './components/privateRoute';
import Characters from './features/starWars/Characters';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/signup" component={SignupPage} />
        <PrivateRoute path="/characters" component={Characters} />
      </Switch>
    </Router>
  );
};

export default App;
