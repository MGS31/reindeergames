import { useState, useRef } from 'react';
import { sortGroup } from '../../utils/sorter';
import Input from '../../constants/Input';

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
    let sessionNames = JSON.parse(sessionStorage.getItem('Reindeer-Names'));
    sortGroup(sessionNames);
  };

  const addBtnClick = (e) => {
    e.preventDefault();
    setToggle(true);
  };

  return (
    <div>
      <h1>Enter Reindeer Here:</h1>
      <form onSubmit={handleSubmit}>
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
            <button className="add-btn" onClick={addBtnClick}>
              Add Name
            </button>
          </div>
        ) : (
          <div className="dialog-box">
            <input type="text" placeholder="Enter Name" ref={inputRef} />
            <button className="add-btn" onClick={handleAddField}>
              Add
            </button>
          </div>
        )}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default List;
