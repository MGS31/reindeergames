import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Pages/Home';
import Rules from './components/Pages/Rules';
import List from './components/Pages/List';
import Contact from './components/Pages/Contact';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Rules" Component={Rules} />
        <Route path="/List" Component={List} />
        <Route path="/Contact" Component={Contact} />
      </Routes>
    </Router>
  );
};

export default App;
