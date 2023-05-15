import React, { useEffect, useState } from 'react';
import { useFormContext } from '../../utils/FormContext/FormContext';
import { fetchQuizData } from '../../library/axios/axios';

export default function Main({
  question,
  handleAnswer,
  quizData,
  currentTheme,
}) {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const { formState, formDispatch } = useFormContext();
  const [animate, setAnimate] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    setId(() => id + 1);
  }, [question]);

  useEffect(() => {
    setAnimate(true); // Trigger the animation when the component mounts
  }, [question]);
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
        <div
          className={`bg-white text-black p-3 rounded-xl w-5/6 h-1/4 shadow-2xl ${
            animate ? 'animate-question-item' : ''
          }`}
          key={id}
        >
          {id} : {questionText}
        </div>
        <div className="grid grid-col-1 gap-4 w-full" key={questionText}>
          {shuffledAnswers.map((answer, index) => (
            <button
              key={index}
              className={`w-3/4 flex gap-2 bg-yellow-100 text-black p-2 rounded-md mx-auto focus:bg-green-500 shadow-2xl ${
                animate ? 'animate-answer-item' : ''
              }`}
              onClick={() => {
                handleAnswerSelection(answer);
              }}
            >
              <div>{index + 1}. </div>
              <div>{answer}</div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
