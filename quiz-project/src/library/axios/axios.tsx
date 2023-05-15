import axios from 'axios';
export const question = axios.create({
  baseURL: 'http://localhost:3000',
});
export const fetchQuizData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/results'); // Replace '/api/quiz' with your actual API endpoint
    const quizData = response.data;
    // Shuffle the answers for each question
    quizData.forEach((question) => {
      const answers = [question.correct_answer, ...question.incorrect_answers];
      shuffleAnswers(answers);
      question.answers = answers;
    });

    return quizData;
  } catch (error) {
    throw new Error('Failed to fetch quiz data');
  }
};
const shuffleAnswers = (answers: string | any[]) => {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
};
