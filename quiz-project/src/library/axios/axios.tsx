import axios from 'axios';

export const fetchQuizData = async (
  amount: any,
  category: any,
  difficulty: any
) => {
  try {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=${amount}${category}${difficulty}`
    );
    const quizData = response.data.results;
    return quizData;
  } catch (error) {
    throw new Error('Failed to fetch quiz data');
  }
};
