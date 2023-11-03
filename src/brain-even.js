import getRandomNumber from './functionofRandom.js';
import engine from './index.js';

function isEven() {
  const randomNumber = getRandomNumber(1, 100);
  let trueAnswer = '';
  const question = randomNumber;
  if (randomNumber % 2 === 0) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }
  return [trueAnswer, question];
}
export default function brainEven() {
  engine('Answer "yes" if the number is even, otherwise answer "no".', isEven);
}
