import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../constants/Input';

import '../../styles/style.scss';
import '../../styles/form.scss';
import '../../styles/checkmark.scss';

const List = () => {
  const [formValues, setFormValues] = useState([
    {
      label: 'Name',
      type: 'text',
      value: '',
    },
  ]);
  const [toggle, setToggle] = useState(false);
  const inputRef = useRef();
  let navigate = useNavigate();

  const handleChange = (e, index) => {
    const values = [...formValues];
    values[index].value = e.target.value;
    setFormValues(values);
  };

  const handleAddField = (e) => {
    e.preventDefault();
    const values = [...formValues];
    values.push({
      label: inputRef.current.value || 'Name',
      type: 'text',
      value: inputRef.current.value || '',
    });
    setFormValues(values);
    setToggle(false);
  };

  const handleDeleteField = (e, index) => {
    const values = [...formValues];
    values.splice(index, 1);
    setFormValues(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = formValues.map((val) => {
      return [val.value];
    });
    sessionStorage.setItem('Reindeer-Names', JSON.stringify(users));
    let path = '/Results';
    navigate(path);
  };

  const addBtnClick = (e) => {
    e.preventDefault();
    setToggle(true);
  };

  return (
    <>
      <div className="form">
        <div className="form-text">
          <h2>Enter Reindeer Here:</h2>
          <form className="input-form" onSubmit={handleSubmit}>
            {formValues.map((obj, index) => (
              <Input
                key={index}
                objValue={obj}
                onChange={handleChange}
                index={index}
                deleteField={handleDeleteField}
              />
            ))}
            {!toggle ? (
              <div className="center">
                <button className="add-name" onClick={addBtnClick}>
                  Add Name
                </button>
              </div>
            ) : (
              <div className="dialog-box">
                <input
                  className="input-text"
                  type="text"
                  placeholder="Enter Name"
                  ref={inputRef}
                />
                <button className="add-btn" onClick={handleAddField}>
                  <span class="checkmark">
                    <div class="checkmark_stem"></div>
                    <div class="checkmark_kick"></div>
                  </span>
                </button>
              </div>
            )}
            <button type="submit" className="submit-btn">
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
