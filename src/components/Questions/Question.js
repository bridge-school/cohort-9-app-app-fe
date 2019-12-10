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
  const optionsString = question.options.join(", ");

  return (
    <>
      <div>
        <label htmlFor={`q${index}__name`}>
          {`Question #${qNumber}`}
          <input
            id={`q${index}__name`}
            type="text"
            value={question.name}
            onChange={e => {
              const value = e.target.value;
              onPromptChange(index, value);
            }}
            required
          />
        </label>
      </div>
      <div>
        <label htmlFor={`q${index}__type`}>
          {`Question #${qNumber} Type`}
          <select
            id={`q${index}__type`}
            onChange={e => {
              const value = e.target.value;
              onTypeChange(index, value);
            }}
            value={question.type}
            required
          >
            <option value="short-answer">Short Answer</option>
            <option value="paragraph">Paragraph</option>
            <option value="checkboxes">Checkboxes</option>
            <option value="dropdown">Dropdown</option>
          </select>
        </label>
      </div>
      {question.type === "checkboxes" || question.type === "dropdown" ? (
        <div>
          <label htmlFor={`q${index}__options`}>
            <input
              id={`q${index}__options`}
              type="text"
              value={optionsString}
              placeholder="array"
              onChange={e => {
                const value = e.target.value;
                onOptionsChange(index, value);
              }}
              required
            />
          </label>
        </div>
      ) : null}
      <div>
        <label htmlFor={`q${index}__req`}>
          Is Required
          <input
            id={`q${index}__req`}
            defaultChecked={question.required}
            onChange={() => {
              onIsRequiredChange(index);
            }}
            type="checkbox"
          />
        </label>
      </div>
      <div>
        <button
          onClick={() => {
            onDelete(index);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Question;
