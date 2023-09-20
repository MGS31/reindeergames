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
        <div className="loop">
          <img
            className="green-tree"
            alt="green-tree"
            src="../images/GreenTree.png"
            width={400}
            height={400}
          />
          <img
            className="red-tree"
            alt="red-tree"
            src="../images/RedTree.png"
            width={400}
            height={400}
          />
          <img
            className="purple-tree"
            alt="purple-tree"
            src="../images/PurpleTree.png"
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
