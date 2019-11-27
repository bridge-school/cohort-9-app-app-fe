import React from 'react';

const Question = ({
  question,
  index,
  onInputChange,
  onSelectChange,
  onCheckboxChange,
  onDelete
}) => {
  return (
    <>
      <div>
        <p>{`Question #${index}`}</p>
        <input
          value={question.name}
          onChange={(e) => {
            const value = e.target.value;
            onInputChange(question.id, value);
          }}
        />
      </div>
      <div>
        <p>{`Question #${index} Type`}</p>
        <select
          onChange={(e) =>{
            const value = e.target.value;
            onSelectChange(question.id, value);
          }}
          value={question.type}
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>

      </div>
      <div>
        <p>Is Required</p>
        <input 
          defaultChecked={question.required}
          onChange={() => {
            onCheckboxChange(question.id);
          }}
          type="checkbox"
        />
      </div>
      <div>
        <button onClick={() => {
          onDelete(question.id);
        }}>Delete</button>
      </div>
    </>
  )
}

export default Question;