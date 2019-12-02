import React, { useState } from "react";
import { connect } from "react-redux";

import Question from "./Question";
import { 
  addNewQuestion, 
  deleteQuestion,
  setQuestionPrompt, 
  setQuestionType, 
  setQuestionRequired, 
  setQuestionOptions, 
} from "../../redux/actions/adminFormActions";

const Questions = (props) => {
  const [questions, setQuestions] = useState([
    { id: 1, name: "", type: "", required: false }
  ]);
  const addNewQuestion = e => {
    e.preventDefault()
    const nextId = questions[questions.length - 1].id + 1;
    const newQuestion = { id: nextId, name: '', type: '', required: false };
    props.addNewQuestion();

    setQuestions([
      ...questions,
      newQuestion
    ])
  }
  const handleQuestionPromptChange = (id, name) => {
    const index = questions.findIndex(question => question.id === id);
    // we have index, we have value (name)
    // we can run a redux action to update questions data
    const updatedQuestions = questions.slice();
    updatedQuestions[index].name = name;
    props.setQuestionPrompt(index, name);

    setQuestions(updatedQuestions);
  }

  // this should be named handleQuestionTypeChange

  const handleQuestionTypeChange = (id, type) => {
    const index = questions.findIndex(question => question.id === id);
    const updatedQuestions = questions.slice();
    updatedQuestions[index].type = type;
    props.setQuestionType();

    setQuestions(updatedQuestions);
  }
  const handleQuestionOptionsChange = (id, array) => {
    const index = questions.findIndex(question => question.id === id);
    const updatedQuestions = questions.slice();
    updatedQuestions[index].array = array;

    setQuestions(updatedQuestions);
  }
  const handleIsRequiredChange = id => {
    const index = questions.findIndex(question => question.id === id);
    const updatedQuestions = questions.slice();
    updatedQuestions[index].required = !questions[index].required;
    props.setQuestionRequired();

    setQuestions(updatedQuestions);
  };
  const handleDelete = (id) => {
    props.deleteQuestion();

    setQuestions([
      ...questions.filter(question => question.id !== id)
    ])
  }
  
  return(
    <div>
      <h1>Application Questions</h1>
      {questions.map((question, i) => {
          return (
            <Question
              key={question.id}
              index={i}
              question={question}
              onPromptChange={handleQuestionPromptChange}
              onTypeChange={handleQuestionTypeChange}
              onOptionsChange={handleQuestionOptionsChange}
              onIsRequiredChange={handleIsRequiredChange}
              onDelete={handleDelete}
            />
          );
        })}
      <button onClick={addNewQuestion}>Add new question</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    questionsData: state.cohortInfo.questionsData
  };
};

const mapDispatchToProps = dispatch => ({
  addNewQuestion: () => dispatch(addNewQuestion()),
  setQuestionPrompt: (questionIndex, propmtText) => {
    dispatch(setQuestionPrompt(questionIndex, propmtText));
  },
  setQuestionType: (questionIndex, optionsString) => {
    dispatch(setQuestionType(questionIndex, optionsString));
  },
  setQuestionRequired: (questionIndex, isRequired) => {
    dispatch(setQuestionRequired(questionIndex, isRequired));
  },
  setQuestionOptions: (questionIndex, optionsString) => {
    dispatch(setQuestionOptions(questionIndex, optionsString));
  },
  deleteQuestion: questionIndex => dispatch(deleteQuestion(questionIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
