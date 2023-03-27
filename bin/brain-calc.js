#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');

const calcGame = () => {
  let currentNum1 = 0;
  let currentNum2 = 0;
  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const getRandomOperator = (coll) => {
    const getRandomIndex = Math.floor(Math.random() * coll.length);
    return coll[getRandomIndex];
  };

  let result = '';
  for (let i = 1; i < 4; i += 1) {
    currentNum1 = getRandomNum(0, 100);
    currentNum2 = getRandomNum(0, 100);
    const currentOperator = getRandomOperator(['+', '-', '*']);
    const expression = `${currentNum1} ${currentOperator} ${currentNum2}`;
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');

    let expressionResult = 0;
    const calculator = (num1, num2) => {
      if (currentOperator === '+') {
        expressionResult = num1 + num2;
      } else if (currentOperator === '-') {
        expressionResult = num1 - num2;
      } else if (currentOperator === '*') {
        expressionResult = num1 * num2;
      }
      return expressionResult;
    };

    if (Number(answer) === calculator(currentNum1, currentNum2)) {
      console.log('Correct!');
      result = 'win';
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${calculator(currentNum1, currentNum2)}'.`);
      result = 'loss';
      break;
    }
  }

  return result === 'win' ? console.log(`Congratulations, ${userName}!`) : console.log(`Let's try again, ${userName}!`);
};

calcGame();
