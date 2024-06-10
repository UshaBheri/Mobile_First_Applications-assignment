import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import PrivateRoute from './components/privateRoute';
import Characters from './features/starWars/characters';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route 
          path="/characters" 
          element={
            <PrivateRoute>
              <Characters />
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
