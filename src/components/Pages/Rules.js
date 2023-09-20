import React from 'react';

import '../../styles/style.scss';
import '../../styles/presents.scss';

const Rules = () => {
  return (
    <>
      <div className="container">
        <div className="text-box">
          <h2 className="rules-header">Here Are The Rules:</h2>
          <p>
            The idea is simple, you want to have everyone participate in a fun
            <br />
            gift giving exchange.
          </p>
          <p>
            BUT you want to make sure it's random and fair for everyone
            Involved.
            <br />
            <br />
            No favourites on Christmas!
          </p>
          <p>
            Reindeer games will take all members of the group and mix them
            <br />
            together before returning a list of pairs.
          </p>
          <p>From there you can set a budget or spending limit and a </p>
        </div>
        <div className="img">
          <div className="loop-presents">
            <div className="presents-1">
              <img
                className="green-present"
                alt="green-present"
                src="../images/Presents/GreenPresent.png"
                width={175}
                height={175}
              />
              <img
                className="red-present"
                alt="red-present"
                src="../images/Presents/RedPresent.png"
                width={175}
                height={175}
              />
              <img
                className="purple-present"
                alt="purple-present"
                src="../images/Presents/PurplePresent.png"
                width={175}
                height={175}
              />
              <img
                className="yellow-present"
                alt="yellow-present"
                src="../images/Presents/YellowPresent.png"
                width={175}
                height={175}
              />
            </div>
            <div className="presents-2">
              <img
                className="blue-present"
                alt="blue-present"
                src="../images/Presents/BluePresent.png"
                width={175}
                height={175}
              />
              <img
                className="orange-present"
                alt="orange-present"
                src="../images/Presents/OrangePresent.png"
                width={175}
                height={175}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rules;
