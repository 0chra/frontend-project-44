import getRandomNumber from './getRandomNumber.js';
import engine from './index.js';

function getData() {
  const randomNumber = getRandomNumber(1, 100);
  const question = randomNumber;
  const trueAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [trueAnswer, question];
}
export default function brainEven() {
  engine('Answer "yes" if the number is even, otherwise answer "no".', getData);
}
