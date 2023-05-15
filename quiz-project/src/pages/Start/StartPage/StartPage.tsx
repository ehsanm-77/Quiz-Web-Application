import React from 'react';
import { useFormContext } from '../../../utils/FormContext/FormContext';

const StartPage = () => {
  const { formState, formDispatch } = useFormContext();

  const handleStart = () => {
    // Perform form validation if needed
    // Update the form state to move to the next page
    formDispatch({ type: 'CHANGE_PAGE', payload: { page: 1 } });
  };

  return (
    <div>
      {/* Render your form inputs here */}
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default StartPage;
