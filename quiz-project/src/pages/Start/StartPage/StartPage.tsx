import { useState } from 'react';
import { useFormContext } from '../../../utils/FormContext/FormContext';

const StartPage = () => {
  const { formState, formDispatch } = useFormContext();
  const [animate, setAnimate] = useState(false);

  const handleStart = () => {
    formDispatch({ type: 'CHANGE_PAGE', payload: { page: 1 } });
    formState.quizData = '';
    console.log(formState);
  };
  const handleAnimation = () => {
    setAnimate(true);
  };
  return (
    <div className="flex flex-col items-center justify-between h-full mb-16 mt-28">
      <div className="text-2xl font-bold gradient-bg">Welcome To Quiz App</div>
      {/* Render your form inputs here */}
      <button
        onClick={() => {
          setTimeout(handleStart, 2000);
          handleAnimation();
        }}
        className="flex flex-col items-center gap-5"
      >
        <div className="font-bold text-xl">GET START</div>
        <img
          src="./src/assets/img/getstart.svg"
          alt=""
          className={`w-16 ${animate ? 'animate-image' : ''}`}
        />
      </button>
    </div>
  );
};

export default StartPage;
