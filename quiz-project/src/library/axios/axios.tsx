import axios from 'axios';

export const fetchQuizData = async (amount, category, difficulty) => {
  try {
    const amountOfQuestion = amount;
    const catagoryOfQuiz = category;
    const difficultyOfQuiz = difficulty;
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=${amountOfQuestion}${catagoryOfQuiz}${difficultyOfQuiz}`
    );
    console.log(response);
    const quizData = response.data.results;
    console.log(quizData);
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
