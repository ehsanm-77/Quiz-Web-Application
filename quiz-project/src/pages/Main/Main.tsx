import { useEffect, useState } from 'react';
import { useFormContext } from '../../utils/FormContext/FormContext';

export default function Main() {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const { formState, formDispatch }: any = useFormContext();
  const [animate, setAnimate] = useState(false);
  const [questionId, setQuestionId] = useState(0);
  const question = formState.quizData[formState.currentQuestionIndex];

  useEffect(() => {
    setAnimate(true);
  }, [question]);

  useEffect(() => {
    if (question) {
      const answers = [question.correct_answer, ...question.incorrect_answers];
      shuffleAnswers(answers);
    }
  }, [question]);

  const shuffleAnswers = (answers: any) => {
    const shuffled = answers.sort(() => Math.random() - 0.5);
    setShuffledAnswers(shuffled);
  };

  if (!question) {
    return null;
  }

  const handleNextPage = () => {
    if (formState.currentQuestionIndex === formState.quizData.length - 1) {
      console.log('EMO');
      formDispatch({ type: 'CHANGE_PAGE', payload: { page: 3 } });
    } else {
      setQuestionId(questionId + 1);
    }
  };
  console.log(formState);

  const handleAnswerSelection = (selectedAnswer: any) => {
    const handleAnswer = (selectedAnswer: any) => {
      const currentQuestion =
        formState.quizData[formState.currentQuestionIndex];
      if (currentQuestion.correct_answer === selectedAnswer) {
        formDispatch({ type: 'INCREMENT_SCORE' });
      }
      formDispatch({ type: 'NEXT_QUESTION' });
    };
    handleAnswer(selectedAnswer);
  };

  const { question: questionText } = question;

  return (
    <>
      <div className="flex flex-col justify-start items-center h-full gap-10">
        <div
          id={`question-${questionId}`}
          className={`bg-white text-black p-3 rounded-xl w-5/6 h-1/4 shadow-2xl ${
            animate ? 'animate-question-item' : ''
          }`}
          key={formState.currentQuestionIndex}
        >
          {formState.currentQuestionIndex + 1} - {questionText}
        </div>
        <div className="grid grid-col-1 gap-4 w-full" key={questionText}>
          {shuffledAnswers.map((answer, index) => (
            <button
              key={index}
              className={`w-3/4 flex gap-2 bg-teal-300 text-black p-2 rounded-md mx-auto focus:bg-green-500 shadow-2xl ${
                animate ? 'animate-answer-item' : ''
              }`}
              onClick={() => {
                handleAnswerSelection(answer);
                handleNextPage();
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
