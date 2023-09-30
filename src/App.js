import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import Nav from './components/Nav';
import Home from './components/Pages/Home';
import Rules from './components/Pages/Rules';
import List from './components/Pages/List';
import Contact from './components/Pages/Contact';
import Results from './components/Pages/Results';

import '../src/styles/style.scss';

const App = () => {
  const [count, setCount] = useState(50);
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  });
  return (
    <>
      <Particles
        options={{
          particles: {
            color: {
              value: '#fff',
            },
            number: {
              value: count,
            },
            opacity: {
              value: { min: 0.3, max: 1 },
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 0.3, max: 5 },
            },
            move: {
              direction: 'bottom',
              enable: true,
              speed: { min: 2, max: 5 },
              straight: true,
            },
          },
        }}
        init={init}
      />
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
    </>
  );
};

export default App;
