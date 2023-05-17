import { useState } from 'react';
import StartPage from '../../pages/Start/StartPage/StartPage';
import Main from '../../pages/Main/Main';
import { useFormContext } from '../../utils/FormContext/FormContext';
import { ResultPage } from '../../pages/ResultPage/ResultPage';
import SetupPage from '../../pages/SetupPage/SetupPage';

const MainSection = () => {
  const { formState, formDispatch } = useFormContext();

  return (
    <>
      {formState.page === 0 ? (
        <StartPage />
      ) : formState.page === 1 ? (
        <SetupPage />
      ) : formState.page === 2 ? (
        <Main />
      ) : formState.page === 3 ? (
        <ResultPage />
      ) : null}
    </>
  );
};

export default MainSection;
