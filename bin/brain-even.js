#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const evenGame = () => {
  let currentNum = 0;
  const randomNum = () => {
    currentNum = Math.floor(Math.random() * 100);
    return currentNum;
  };

  let result = '';
  for (let i = 1; i < 4; i += 1) {
    randomNum();
    console.log(`Question: ${currentNum}`);
    const answer = readlineSync.question('Your answer: ');

    const isEven = currentNum % 2 === 0;
    const isOdd = currentNum % 2 !== 0;

    if (isEven === true && answer === 'yes') {
      console.log('Correct!');
      result = 'win';
    } else if (isOdd === true && answer === 'no') {
      console.log('Correct!');
      result = 'win';
    } else if (isEven === true && answer !== 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      result = 'loss';
      break;
    } else if (isOdd === true && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      result = 'loss';
      break;
    }
  }

  return result === 'win'
    ? console.log(`Congratulations, ${userName}!`)
    : console.log(`Let's try again, ${userName}!`);
};

evenGame();
