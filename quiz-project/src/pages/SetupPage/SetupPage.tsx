import { fetchQuizData } from '../../library/axios/axios';
import { useFormContext } from '../../utils/FormContext/FormContext';
import { useState, useEffect } from 'react';

export default function SetupPage() {
  const { formState, formDispatch } = useFormContext();
  const [setup, setSetup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [catagory, setCatagory] = useState('');
  const [dificulty, setDificulty] = useState('');
  const [number, setNumber] = useState('');
  const [isValidNumber, setIsValidNumber] = useState(true);
  const [numberErrorMessage, setNumberErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSetup = () => {
    formDispatch({ type: 'CHANGE_PAGE', payload: { page: 2 } });
  };

  useEffect(() => {
    if (isSubmitted || number !== '') {
      if (number === '') {
        setIsValidNumber(false);
        setNumberErrorMessage('Please fill in the number');
      } else if (isNaN(number) || +number < 1 || +number > 50) {
        setIsValidNumber(false);
        setNumberErrorMessage('Please enter a number between 1 and 50');
      } else {
        setIsValidNumber(true);
        setNumberErrorMessage('');
      }
    }
  }, [number, isSubmitted]);

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleCategory = (e) => {
    setCatagory(e.target.value);
  };

  const handleDificulty = (e) => {
    setDificulty(e.target.value);
  };

  const handleData = () => {
    setIsLoading(true);
    fetchQuizData(number, `&category=${catagory}`, `&difficulty=${dificulty}`)
      .then((data) => {
        formDispatch({ type: 'SET_QUIZ_DATA', payload: data });
        console.log(data);
        formState.quizData === data;
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  const handleSetupButton = () => {
    setSetup(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (isValidNumber) {
      handleData();
      handleSetupButton();
      setTimeout(handleSetup, 500);
    }
  };

  return (
    <div className="h-full flex flex-col justify-evenly items-center">
      <div className="text-2xl font-bold">Setup Quiz</div>
      <div className="w-3/4">
        <form onSubmit={handleSubmit} className="p-5 flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="">Number Of Question</label>
            <input
              className="p-2 rounded-md bg-yellow-300 text-black focus:outline-none"
              placeholder="Enter Number"
              type="text"
              onChange={handleNumber}
            />
            {!isValidNumber && (isSubmitted || number !== '') && (
              <div className="text-red-400">{numberErrorMessage}</div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Category</label>
            <select
              className="p-2 rounded-md bg-yellow-300 focus:outline-none text-black"
              name=""
              id=""
              onChange={handleCategory}
            >
              <option value="any">Any</option>
              <option value="21">Sports</option>
              <option value="23">History</option>
              <option value="27">Animals</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Difficulty</label>
            <select
              className="p-2 rounded-md bg-yellow-300 focus:outline-none text-black"
              name=""
              id=""
              onChange={handleDificulty}
            >
              <option value="">Any</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </form>
      </div>
      <button
        className="flex flex-col mb-10 justify-center items-center"
        onClick={() => {
          setIsSubmitted(true);
          if (isValidNumber) {
            handleData();
            handleSetupButton();
            setTimeout(handleSetup, 500);
          }
        }}
        type="submit"
      >
        <div className="text-2xl">START</div>
        {setup ? (
          <img
            src="./src/assets/img/power-start-green.svg"
            className="w-10"
            alt=""
          />
        ) : (
          <img
            src="./src/assets/img/power-start-red.svg"
            className="w-10"
            alt=""
          />
        )}
      </button>
    </div>
  );
}
