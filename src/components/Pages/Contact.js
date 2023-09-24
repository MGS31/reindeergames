import React from 'react';

import '../../styles/style.scss';
import '../../styles/contact.scss';

const Contact = () => {
  return (
    <div className="contact-box">
      <div className="text-box">
        <h2>Contact</h2>
        <p>For any questions concerns of feedback please contact us here:</p>
        <ul>
          <li>Email: ReindeerGames@gmail.com</li>
          <li>Phone: 1-800-ReindeerGames</li>
          <li>Mail: 1 The North Pole</li>
        </ul>
      </div>
      <div className="img">
        <img alt="reindeer" />
      </div>
    </div>
  );
};

export default Contact;
