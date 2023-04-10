import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return getGcd(num2, num1 % num2);
};

const generateRound = () => {
  const num1 = getRandomInRange(1, 100);
  const num2 = getRandomInRange(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return [question, correctAnswer];
};

export default () => {
  runEngine(rules, generateRound);
};
