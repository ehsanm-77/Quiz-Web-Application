import React from 'react';
import { useFormContext } from '../../utils/FormContext/FormContext';

export const ResultPage = () => {
  const { formState, formDispatch } = useFormContext();
  const handleAgain = () => {
    formDispatch({ type: 'CHANGE_PAGE', payload: { page: 0 } });
  };
  console.log(formState.score);
  return (
    <div>
      YOUR SCORE = {formState.score}
      <button onClick={handleAgain}>Again</button>
    </div>
  );
};
