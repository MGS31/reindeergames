import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/nav.scss';

const Nav = () => {
  return (
    <header className="top">
      <div className="nav-Logo">
        <div className="logo-image">
          <img src={'/images/Frame 2.png'} alt="Logo" />
        </div>
        <div className="app-title">
          <h1>Reindeer</h1>
          <h1>Games</h1>
        </div>
      </div>
      <div className="link-nav">
        <div className="home">
          <Link to="/">Home</Link>
        </div>
        <div className="rules">
          <Link to="/Rules">Rules</Link>
        </div>
        <div className="create">
          <Link to="/List">Create Group</Link>
        </div>
        <div className="contact">
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
