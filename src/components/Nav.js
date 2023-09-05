import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/nav.scss';

const Nav = () => {
  return (
    <header className="top">
      <div className="logo-nav">
        <div className="logo-image">
          <img src={''} alt="Logo" />
        </div>
        <div className="app-title">
          <h1>
            Reindeer
            <span className="Games">
              <span>Games</span>
            </span>
          </h1>
        </div>
      </div>
      <div className="link-nav">
        <div className="Home">
          <Link to="/"> Home </Link>
        </div>
        <div className="Rules">
          <Link to="/Rules"> Rules </Link>
        </div>
        <div className="create">
          <Link to="/List"> Create Group </Link>
        </div>
        <div className="contact">
          <Link to="/Contact"> Contact </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
