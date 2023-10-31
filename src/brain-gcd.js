import engine from './index.js';
import number from './system_functions/functionofRandom.js';

function nod(firstNumber, secondNumber) {
  if (secondNumber > firstNumber) {
    return nod(secondNumber, firstNumber);
  }
  if (!secondNumber) {
    return firstNumber;
  }
  return nod(secondNumber, firstNumber % secondNumber);
}
export default function brainGcd() {
  const numbers1 = number(1, 100);
  const numbers2 = number(1, 100);
  const question = (`${numbers1} ${numbers2}`);
  const trueAnswer = nod(numbers1, numbers2);
  return [trueAnswer, question];
}
engine('Find the greatest common divisor of given numbers.', brainGcd);
