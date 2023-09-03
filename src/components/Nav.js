import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="top">
      <img src={''} alt="Logo" />
      <h1>
        Reindeer
        <span className="Games">
          <span>Games</span>
        </span>
      </h1>
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
    </header>
  );
};

export default Nav;
