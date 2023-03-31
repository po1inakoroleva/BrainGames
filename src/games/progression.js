import gameEngine from '../index.js';

const rulesOfTheProgressionGame = 'What number is missing in the progression?';

const roundProgressionGame = () => {
  const result = [];
  const generateRandomInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const firstProgressionNum = generateRandomInRange(0, 100);
  const progressionStep = generateRandomInRange(2, 10);

  const getProgression = (num) => {
    const res = [];
    const progressionLength = 10;
    let sequenceMember = num;
    for (let i = 0; i < progressionLength; i += 1) {
      sequenceMember += progressionStep;
      res.push(sequenceMember);
    }
    return res;
  };

  const progression = getProgression(firstProgressionNum);
  const hiddenNumberIndex = generateRandomInRange(0, 10);
  const correctAnswer = String(progression[hiddenNumberIndex]);
  progression[hiddenNumberIndex] = '..';

  const getProgressionAsString = (arr) => {
    const separator = ' ';
    return arr.join(separator);
  };

  const question = getProgressionAsString(progression);

  result.push(question);
  result.push(correctAnswer);
  return result;
};

export default () => {
  gameEngine(rulesOfTheProgressionGame, roundProgressionGame);
};
