import _ from 'lodash';
import gameEngine from '../index.js';

const rulesOfTheGcdGame = 'Find the greatest common divisor of given numbers.';

const roundGcdGame = () => {
  const result = [];

  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const firstNum = getRandomNum(0, 100);
  const secondNum = getRandomNum(0, 100);

  const question = `${firstNum} ${secondNum}`;

  const getDivisors = (num) => {
    const divisors = [];
    for (let divisor = 1; divisor <= num / 2; divisor += 1) {
      if (num % divisor === 0) {
        divisors.push(divisor);
      }
    }
    return divisors;
  };

  const firstNumDivisors = getDivisors(firstNum);
  const secondNumDivisors = getDivisors(secondNum);

  const getGreatestDivisor = (divisors1, divisors2) => {
    const commonDivisors = _.intersection(divisors1, divisors2);
    const maxDivisor = Math.max(...commonDivisors);

    return maxDivisor;
  };

  const greatestDivisor = String(getGreatestDivisor(firstNumDivisors, secondNumDivisors));

  result.push(question);
  result.push(greatestDivisor);
  return result;
};

export default () => {
  gameEngine(rulesOfTheGcdGame, roundGcdGame);
};
