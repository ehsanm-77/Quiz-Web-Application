import React, { useState } from 'react';
import { useFormContext } from '../../utils/FormContext/FormContext';

export const ResultPage = () => {
  const { formState, formDispatch } = useFormContext();

  const [animate, setAnimate] = useState(false);

  const handleAgain = () => {
    formState.score = 0;
    formState.currentQuestionIndex = 0;
    formDispatch({ type: 'CHANGE_PAGE', payload: { page: 0 } });
  };
  const handleAgainAnimation = () => {
    setAnimate(true);
  };

  console.log(formState.score, formState.quizData.length);
  return (
    <div className="flex h-full flex-col justify-evenly items-center gap-10">
      {(formState.score * 100) / formState.quizData.length > 50 ? (
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src="./src/assets/img/win.svg"
            className="w-40 rounded-full mb-2"
            alt=""
          />
          <div className="text-2xl animate-bounce bg-green-300 p-2 rounded-full">
            ✨ CONGRATS ✨
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src="./src/assets/img/lose.svg"
            className="w-40 rounded-full"
            alt=""
          />
          <div> TRY MORE </div>
        </div>
      )}
      <div className="text-xl font-bold">
        YOUR SCORE = {(formState.score * 100) / formState.quizData.length} %
      </div>
      <button
        onClick={() => {
          setTimeout(handleAgain, 2000);
          handleAgainAnimation();
        }}
      >
        <div>
          <div className="text-xl font-bold">Again</div>
        </div>
      </button>
    </div>
  );
};
