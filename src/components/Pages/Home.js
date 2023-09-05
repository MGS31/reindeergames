import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/style.scss';

const Home = () => {
  return (
    <div>
      <div className="text-box">
        <h3>Welcome to ReindeerGames!</h3>
        <p>The easiest way to get your holiday games started</p>
        <p>
          If you're looking for a quick way to get your Secret Santa, White
          Elephant or any other group based games started
        </p>
        <p>Look no further than Reindeer Games! Click Below to get started!</p>
        <h5>
          <Link to="/List">Lets Get Started</Link>
        </h5>
      </div>
    </div>
  );
};

export default Home;
