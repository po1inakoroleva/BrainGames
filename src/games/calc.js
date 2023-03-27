import gameEngine from '../index.js';

const rulesOfTheCalcGame = 'What is the result of the expression?';

const roundCalcGame = () => {
  const result = [];

  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const getRandomOperator = (coll) => {
    const getRandomIndex = Math.floor(Math.random() * coll.length);
    return coll[getRandomIndex];
  };

  const randomNum1 = getRandomNum(0, 100);
  const randomNum2 = getRandomNum(0, 100);
  const randomOperator = getRandomOperator(['+', '-', '*']);

  const expression = `${randomNum1} ${randomOperator} ${randomNum2}`;

  const calculator = (num1, num2) => {
    let expressionResult = 0;
    if (randomOperator === '+') {
      expressionResult = num1 + num2;
    } else if (randomOperator === '-') {
      expressionResult = num1 - num2;
    } else if (randomOperator === '*') {
      expressionResult = num1 * num2;
    }
    return expressionResult;
  };

  const correctAnswer = String(calculator(randomNum1, randomNum2));

  result.push(expression);
  result.push(correctAnswer);
  return result;
};

export default () => {
  gameEngine(rulesOfTheCalcGame, roundCalcGame);
};
