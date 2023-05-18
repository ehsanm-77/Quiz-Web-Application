import axios from 'axios';

export const fetchQuizData = async (amount, category, difficulty) => {
  try {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=${amount}${category}${difficulty}`
    );
    const quizData = response.data.results;

    // quizData.forEach((question) => {
    //   const answers = [question.correct_answer, ...question.incorrect_answers];
    //   changeOrderAnswers(answers);
    //   question.answers = answers;
    // });
    return quizData;
  } catch (error) {
    throw new Error('Failed to fetch quiz data');
  }
};
// const changeOrderAnswers = (answers: string | any[]) => {
//   for (let i = answers.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [answers[i], answers[j]] = [answers[j], answers[i]];
//   }
// };
