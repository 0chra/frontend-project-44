import engine from './index.js';
import getRandomNumber from './functionofRandom.js';

function nod(firstNumber, secondNumber) {
  if (secondNumber > firstNumber) {
    return nod(secondNumber, firstNumber);
  }
  if (!secondNumber) {
    return firstNumber;
  }
  return nod(secondNumber, firstNumber % secondNumber);
}
function isNod() {
  const numbers1 = getRandomNumber(1, 100);
  const numbers2 = getRandomNumber(1, 100);
  const question = (`${numbers1} ${numbers2}`);
  const trueAnswer = nod(numbers1, numbers2);
  return [trueAnswer, question];
}
export default function brainGcd() {
  engine('Find the greatest common divisor of given numbers.', isNod);
}
