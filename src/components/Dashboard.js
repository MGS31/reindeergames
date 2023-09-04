import React from 'react';
import Nav from './Nav';

import '../styles/Dashboard.scss';

const Dashboard = () => {
  return (
    <container className="app-body">
      <header>
        <Nav />
      </header>
      <body></body>
    </container>
  );
};

export default Dashboard;
