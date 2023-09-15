import React from 'react';
import { sortGroup } from '../../utils/sorter';

const Results = () => {
  let sessionNames = JSON.parse(sessionStorage.getItem('Reindeer-Names'));
  let results = sortGroup(sessionNames);

  let groups = results.map((group) => (
    <li>
      <span>Sender: {group.sender}</span>
      <span> </span>
      <span>Reciever: {group.receiver}</span>
    </li>
  ));

  return (
    <div className="container">
      <div className="text-box"></div>
      <h2>Results:</h2>
      <ul>{groups}</ul>
      <div className="img">
        <img alt="snowmam" />
      </div>
    </div>
  );
};

export default Results;
