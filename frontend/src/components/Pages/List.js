import { useState } from 'react';
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
    {
      label: 'Email',
      type: 'text',
      value: '',
    },
  ]);
  const [toggle, setToggle] = useState(false);
  let navigate = useNavigate();

  const handleChange = (e, index) => {
    const values = [...formValues];
    values[index].value = e.target.value;
    setFormValues(values);
  };

  const handleAddField = (e) => {
    e.preventDefault();
    const values = [...formValues];
    values.push(
      {
        label: 'Name:',
        type: 'text',
        value: '',
      },
      {
        label: 'Email:',
        type: 'text',
        value: '',
      }
    );
    setFormValues(values);
    setToggle(false);
  };

  const handleDeleteField = (e) => {
    e.preventDefault();
    const values = [...formValues];
    let newValues = values.slice(0, -1).slice(0, -1);
    setFormValues(newValues);
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
              />
            ))}
            <button className="add-name" onClick={handleAddField}>
              Add More!
            </button>
            {!toggle ? (
              <div className="center">
                <div className="remove" onClick={handleDeleteField}>
                  <button className="remove-btn">X</button>
                </div>
              </div>
            ) : (
              <div className="dialog-box">
                {formValues.map((obj, index) => (
                  <Input
                    key={index}
                    objValue={obj}
                    onChange={handleChange}
                    index={index}
                    deleteField={handleDeleteField}
                  />
                ))}
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
