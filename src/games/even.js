import getRandomInRange from '../utils.js';
import gameEngine from '../index.js';

const rulesOfTheEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const roundEvenGame = () => {
  const result = [];

  const question = getRandomInRange(0, 100);

  const isEven = question % 2 === 0;
  const correctAnswer = isEven === true ? 'yes' : 'no';

  result.push(question);
  result.push(correctAnswer);
  return result;
};

export default () => {
  gameEngine(rulesOfTheEvenGame, roundEvenGame);
};
