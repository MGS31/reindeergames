import React from 'react';
import { sortGroup } from '../../utils/sorter';

import '../../styles/style.scss';
import '../../styles/results.scss';

const Results = () => {
  let sessionNames = JSON.parse(sessionStorage.getItem('Reindeer-Names'));
  let results = sortGroup(sessionNames);
  let groups;

  if (results !== null) {
    groups = results.map((group) => (
      <li>
        <p>Sender: {group.sender}</p>
        <p>Reciever: {group.receiver}</p>
      </li>
    ));
  } else {
    groups =
      "Oops! You didn't add enough names! Click Create Groups to try again!";
  }

  return (
    <div className="result-box">
      <div className="result-text">
        <h2>Results:</h2>
        <ol>{groups}</ol>
      </div>
      <div className="result-img">
        <img
          className="snowman3"
          alt="snowman3"
          src="../images/snowman/snowman3.png"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Results;
