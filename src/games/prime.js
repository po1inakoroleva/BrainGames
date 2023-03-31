import gameEngine from '../index.js';

const rulesOfThePrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const roundPrimeGame = () => {
  const result = [];
  const generateRandomInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const question = generateRandomInRange(1, 100);

  const isPrime = (num) => {
    if (num === 1) {
      return 'no';
    }

    for (let divisor = 2; divisor <= num / 2; divisor += 1) {
      if (num % divisor === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const correctAnswer = isPrime(question);

  result.push(question);
  result.push(correctAnswer);
  return result;
};

export default () => {
  gameEngine(rulesOfThePrimeGame, roundPrimeGame);
};
