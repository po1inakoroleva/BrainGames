import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }

  for (let divisor = 2; divisor <= num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const question = getRandomInRange(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  runEngine(rules, generateRound);
};
