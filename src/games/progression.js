import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const generateRound = () => {
  const firstProgressionNum = getRandomInRange(0, 100);
  const progressionStep = getRandomInRange(2, 10);
  const progressionLength = 10;
  const progression = generateProgression(firstProgressionNum, progressionStep, progressionLength);

  const hiddenNumberIndex = getRandomInRange(0, 9);
  const correctAnswer = String(progression[hiddenNumberIndex]);

  progression[hiddenNumberIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  runEngine(rules, generateRound);
};
