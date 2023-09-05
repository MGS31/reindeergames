import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/nav.scss';

const Nav = () => {
  return (
    <header className="top">
      <div className="logo-nav">
        <img src={''} alt="Logo" />
        <h1>
          Reindeer
          <span className="Games">
            <span>Games</span>
          </span>
        </h1>
      </div>
      <div className="link-nav">
        <span className="links">
          <span className="Home">
            <Link to="/">Home</Link>
          </span>
          <span className="Rules">
            <Link to="/Rules">Rules</Link>
          </span>
          <span className="create">
            <Link to="/List">Create Group</Link>
          </span>
          <span className="contact">
            <Link to="/Contact">Contact</Link>
          </span>
        </span>
      </div>
    </header>
  );
};

export default Nav;
