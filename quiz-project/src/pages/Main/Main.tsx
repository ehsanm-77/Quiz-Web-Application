import React, { useEffect, useState } from 'react';
import { useFormContext } from '../../utils/FormContext/FormContext';

export default function Main({ question, handleAnswer, quizData }) {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const { formState, formDispatch } = useFormContext();
  useEffect(() => {
    if (question) {
      const answers = [question.correct_answer, ...question.incorrect_answers];
      shuffleAnswers(answers);
    }
  }, [question]);
  const shuffleAnswers = (answers) => {
    const shuffled = answers.sort(() => Math.random() - 0.5);
    setShuffledAnswers(shuffled);
  };

  if (!question) {
    return null;
  }
  const handleNextPage = () => {
    console.log(formState.currentQuestionIndex, quizData.length - 1);
    if (formState.currentQuestionIndex === quizData.length - 1) {
      console.log('EMO');
      // Perform form validation if needed
      // Update the form state to move to the next page
      formDispatch({ type: 'CHANGE_PAGE', payload: { page: 2 } });
    }
  };

  const handleAnswerSelection = (selectedAnswer) => {
    handleAnswer(selectedAnswer);
    handleNextPage();
  };

  const { question: questionText } = question;

  return (
    <>
      <div className="flex flex-col justify-start items-center h-full gap-10">
        <div className="bg-[url('../../../src/assets/img/quiz3.jpg')] bg-cover bg-no-repeat bg-center text-white p-3 rounded-xl w-5/6 h-1/4 shadow-2xl">
          {questionText}
        </div>
        <div className="grid grid-col-1 gap-4 w-full">
          {shuffledAnswers.map((answer, index) => (
            <button
              key={index}
              className="w-3/4 bg-white text-black p-2 rounded-md mx-auto focus:bg-green-500 shadow-2xl"
              onClick={() => {
                handleAnswerSelection(answer);
              }}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
