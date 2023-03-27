import gameEngine from '../index.js';

const rulesOfTheEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const roundEvenGame = () => {
  const result = [];

  const geterateRandomInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const randonNum = geterateRandomInRange(0, 100);

  const isEven = randonNum % 2 === 0;
  const correctAnswer = isEven === true ? 'yes' : 'no';

  result.push(randonNum);
  result.push(correctAnswer);
  return result;
};

export default () => {
  gameEngine(rulesOfTheEvenGame, roundEvenGame);
};
