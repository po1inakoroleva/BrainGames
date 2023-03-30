import gameEngine from '../index.js';

const rulesOfTheCalcGame = 'What is the result of the expression?';

const roundCalcGame = () => {
  const result = [];

  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const getRandomOperator = (operatorsArr) => {
    const getRandomIndex = Math.floor(Math.random() * operatorsArr.length);
    return operatorsArr[getRandomIndex];
  };

  const firstNum = getRandomNum(0, 100);
  const secondNum = getRandomNum(0, 100);
  const expressionOperator = getRandomOperator(['+', '-', '*']);

  const question = `${firstNum} ${expressionOperator} ${secondNum}`;

  const calculator = (num1, num2) => {
    let expressionResult;
    if (expressionOperator === '+') {
      expressionResult = num1 + num2;
    } else if (expressionOperator === '-') {
      expressionResult = num1 - num2;
    } else if (expressionOperator === '*') {
      expressionResult = num1 * num2;
    }
    return expressionResult;
  };

  const correctAnswer = String(calculator(firstNum, secondNum));

  result.push(question);
  result.push(correctAnswer);
  return result;
};

export default () => {
  gameEngine(rulesOfTheCalcGame, roundCalcGame);
};
