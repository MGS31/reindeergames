import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/style.scss';

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="text-box">
          <h2>Welcome to ReindeerGames!</h2>
          <p>The easiest way to get your holiday games started</p>
          <p>
            If you're looking for a quick way to get your Secret Santa, <br />
            <br />
            White Elephant or any other group based games started
          </p>
          <p>
            Look no further than Reindeer Games! Click Below to get started!
          </p>
          <h4>
            <Link to="/List">Lets Get Started</Link>
          </h4>
        </div>
        <div className="img">
          <img alt="christmas tree" />
        </div>
      </div>
    </>
  );
};

export default Home;
