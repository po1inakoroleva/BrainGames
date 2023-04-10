import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = () => {
  const firstProgressionNum = getRandomInRange(0, 100);
  const progressionStep = getRandomInRange(2, 10);
  const progressionLength = 10;
  const result = [];

  let sequenceMember = firstProgressionNum;
  for (let i = 0; i < progressionLength; i += 1) {
    sequenceMember += progressionStep;
    result.push(sequenceMember);
  }

  return result;
};

const generateRound = () => {
  const progression = getProgression();

  const hiddenNumberIndex = getRandomInRange(0, 9);
  const correctAnswer = String(progression[hiddenNumberIndex]);

  progression[hiddenNumberIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  runEngine(rules, generateRound);
};
