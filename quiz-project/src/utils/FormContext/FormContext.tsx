import { useContext, useReducer, ReactNode, createContext } from 'react';

// Define the initial form state
const initialFormState = {
  page: 0,
  currentPage: 'start',
  quizData: null,
  currentQuestionIndex: 0,
  score: 0,
};

// Define the form reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_QUIZ_DATA':
      return { ...state, quizData: action.payload };
    case 'INCREMENT_SCORE':
      return { ...state, score: state.score + 1 };
    case 'NEXT_QUESTION':
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case 'CHANGE_PAGE':
      return { ...state, page: action.payload.page };
    default:
      return state;
  }
};

// Create the form context
const FormContext = createContext();

// Custom hook to access the form context
export const useFormContext = () => useContext(FormContext);

// Form context provider component
export const FormProvider = ({ children }) => {
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);

  return (
    <FormContext.Provider value={{ formState, formDispatch }}>
      {children}
    </FormContext.Provider>
  );
};
