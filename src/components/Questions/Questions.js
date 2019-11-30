import React, { useState } from 'react';
import Question from './Question';

const Questions = () => {
  const [ questions, setQuestions ] = useState([
    { id: 1, name: '', type: '', required: false },
  ]);

  return(
    <div>
      <h1>Application Questions</h1>
      {
        questions.map((question, i) => {
          return (
            <Question key={question.id}
              index={i + 1}
              question={question}
              onInputChange={(id, name) => {
                const index = questions.findIndex(question => question.id === id);
                const updatedQuestions = questions.slice();
                updatedQuestions[index].name = name;
                setQuestions(updatedQuestions);
              }}
              onSelectChange={(id, type) => {
                const index = questions.findIndex(question => question.id === id);
                const updatedQuestions = questions.slice();
                updatedQuestions[index].type = type;
                setQuestions(updatedQuestions);
              }}
              onInputArrayChange={(id, array) => {
                const index = questions.findIndex(question => question.id === id);
                const updatedQuestions = questions.slice();
                updatedQuestions[index].array = array;
                setQuestions(updatedQuestions);
              }}
              onCheckboxChange={(id) => {
                const index = questions.findIndex(question => question.id === id);
                const updatedQuestions = questions.slice();
                updatedQuestions[index].required = !questions[index].required
                setQuestions(updatedQuestions);
              }}
              onDelete={(id) =>
                setQuestions([
                  ...questions.filter(question => question.id !== id)
                ])
              }
            />
          );
        })
      }

      <button onClick={() => {
        const nextId = questions[questions.length - 1].id + 1;
        const newQuestion = { id: nextId, name: '', type: '', required: false }
        setQuestions([
          ...questions,
          newQuestion
        ])
      }}>Add new question</button>
    </div>
  )
}

export default Questions;