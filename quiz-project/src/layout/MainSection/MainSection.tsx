import React, { useEffect, useState } from 'react';
import StartPage from '../../pages/Start/StartPage/StartPage';
import Main from '../../pages/Main/Main';
import { useFormContext } from '../../utils/FormContext/FormContext';
import { fetchQuizData } from '../../library/axios/axios';
import { ResultPage } from '../../pages/ResultPage/ResultPage';

const MainSection = (currentTheme) => {
  const { formState, formDispatch } = useFormContext();
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    // Fetch the quiz data from the API when the component mounts
    fetchQuizData()
      .then((data) => {
        setQuizData(data);
        formDispatch({ type: 'SET_QUIZ_DATA', payload: data });
      })
      .catch((error) => console.error(error));
  }, [formDispatch]);

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = quizData[formState.currentQuestionIndex];
    if (currentQuestion.correct_answer === selectedAnswer) {
      formDispatch({ type: 'INCREMENT_SCORE' });
    }
    formDispatch({ type: 'NEXT_QUESTION' });
  };
  console.log(formState);
  return (
    <>
      {formState.page === 0 ? (
        <StartPage />
      ) : formState.page === 1 ? (
        <Main
          question={quizData[formState.currentQuestionIndex]}
          handleAnswer={handleAnswer}
          quizData={quizData}
          currentTheme={currentTheme}
          //   setQuizData={setQuizData}
        />
      ) : formState.page === 2 ? (
        <ResultPage />
      ) : null}
    </>
  );
};

export default MainSection;
