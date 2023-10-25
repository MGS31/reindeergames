import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/style.scss';
import '../../styles/form.scss';
import '../../styles/checkmark.scss';

const List = () => {
  const [value, setValue] = useState('');
  let navigate = useNavigate();

  const handleChange = (e) => {
    const values = e.target.value;
    setValue(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const index = Math.floor(Math.random());
    const groupName = value;
    console.log('groupName: ', groupName);
    sessionStorage.setItem(`Group ${index}`, JSON.stringify(groupName));
    let path = '/List';
    navigate(path);
  };

  return (
    <>
      <div className="form">
        <div className="form-text">
          <h2>Enter Group Name Here:</h2>
          <form className="input-form" onSubmit={handleSubmit}>
            <label>
              Group Name:
              <input
                type="text"
                name="group-name"
                value={value}
                onChange={handleChange}
              />
            </label>
            <button
              type="submit"
              className="submit-btn"
              onSubmit={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        <img
          className="snowman1"
          alt="snowman1"
          src="../images/snowman/snowman1.png"
          width={400}
          height={400}
        />
      </div>
    </>
  );
};

export default List;
