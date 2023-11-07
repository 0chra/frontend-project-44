import getRandomNumber from './getRandomNumber.js';
import engine from './index.js';

function isEven(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}
function getData() {
  const randomNumber = getRandomNumber(1, 100);
  const question = randomNumber;
  const trueAnswer = isEven(randomNumber);
  return [trueAnswer, question];
}
export default function brainEven() {
  engine('Answer "yes" if the number is even, otherwise answer "no".', getData);
}
