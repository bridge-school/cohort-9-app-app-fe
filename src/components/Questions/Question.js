import React from "react";

const Question = ({
  question,
  index,
  onPromptChange,
  onOptionsChange,
  onTypeChange,
  onIsRequiredChange,
  onDelete
}) => {
  const qNumber = index + 1;

  return (
    <>
      <div>
        <label for={`q${question.id}__name`}>{`Question #${qNumber}`}</label>
        <input
          id={`q${question.id}__name`}
          type="text"
          value={question.name}
          onChange={e => {
            const value = e.target.value;
            onPromptChange(question.id, value);
          }}
        />
      </div>
      <div>
        <label
          for={`q${question.id}__type`}
        >{`Question #${qNumber} Type`}</label>
        <select
          id={`q${question.id}__type`}
          onChange={e => {
            const value = e.target.value;
            onTypeChange(question.id, value);
          }}
          value={question.type}
        >
          <option value="short-answer">Short Answer</option>
          <option value="paragraph">Paragraph</option>
          <option value="checkboxes">Checkboxes</option>
          <option value="dropdown">Dropdown</option>
        </select>
      </div>
      {question.type === "checkboxes" || question.type === "dropdown" ? (
        <div>
          <label for={`q${question.id}__array`}></label>
          <input
            id={`q${question.id}__array`}
            type="text"
            value={question.array ? question.array : "[]"}
            placeholder="array"
            onChange={e => {
              const value = e.target.value;
              onOptionsChange(question.id, value);
            }}
          />
        </div>
      ) : null}
      <div>
        <label for={`q${question.id}__req`}>Is Required</label>
        <input
          id={`q${question.id}__req`}
          defaultChecked={question.required}
          onChange={() => {
            onIsRequiredChange(question.id);
          }}
          type="checkbox"
        />
      </div>
      <div>
        <button
          onClick={() => {
            onDelete(question.id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Question;
