import React from 'react';

const Question = ({
  question,
  index,
  onInputChange,
  onInputArrayChange,
  onSelectChange,
  onCheckboxChange,
  onDelete
}) => {
  return (
    <>
      <div>
        <label for={`q${question.id}__name`}>{`Question #${index}`}</label>
        <input
          id={`q${question.id}__name`}
          type="text"
          value={question.name}
          onChange={(e) => {
            const value = e.target.value;
            onInputChange(question.id, value);
          }}
        />
      </div>
      <div>
        <label for={`q${question.id}__type`}>{`Question #${index} Type`}</label>
        <select
          id={`q${question.id}__type`}
          onChange={(e) =>{
            const value = e.target.value;
            onSelectChange(question.id, value);
          }}
          value={question.type}
        >
          <option value="short-answer">Short Answer</option>
          <option value="paragraph">Paragraph</option>
          <option value="checkboxes">Checkboxes</option>
          <option value="dropdown">Dropdown</option>
        </select>
      </div>
      {question.type === "checkboxes" || question.type === "dropdown" ? 
        <div>
          <label for={`q${question.id}__array`}></label>
          <input
            id={`q${question.id}__array`}
            type="text"
            value={question.array ? question.array : "[]"}
            placeholder="array"
            onChange={(e) => {
              const value = e.target.value;
              onInputArrayChange(question.id, value);
            }}
          />
        </div>
        : null
      }
      <div>
        <label for={`q${question.id}__req`}>Is Required</label>
        <input 
          id={`q${question.id}__req`}
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