import getRandomNumber from './getRandomNumber.js';
import engine from './index.js';

function calculation(numbers1, numbers2, symbol) {
  switch (symbol) {
    case '-':
      return numbers1 - numbers2;
    case '+':
      return numbers1 + numbers2;
    case '*':
      return numbers1 * numbers2;
    default:
      throw new Error(`Unknown order state: '${calculation}'!`);
  }
}
function getData() {
  let trueAnswer = 0;
  const randomSymbols = getRandomNumber(0, 2);
  const symbols = ['-', '+', '*'];
  const getRandomSymbol = symbols[randomSymbols];
  const numbers1 = getRandomNumber(1, 100);
  const numbers2 = getRandomNumber(1, 100);
  const question = (`${numbers1} ${getRandomSymbol} ${numbers2}`);
  trueAnswer = calculation(numbers1, numbers2, getRandomSymbol);
  return [trueAnswer, question];
}
export default function brainCalc() {
  engine('What is the result of the expression?', getData);
}
