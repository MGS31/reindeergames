import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Pages/Home';
import Rules from './components/Pages/Rules';
import List from './components/Pages/List';
import Contact from './components/Pages/Contact';
import Results from './components/Pages/Results';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Rules" Component={Rules} />
        <Route path="/List" Component={List} />
        <Route path="/Contact" Component={Contact} />
        <Route path="/Results" Component={Results} />
      </Routes>
    </Router>
  );
};

export default App;
