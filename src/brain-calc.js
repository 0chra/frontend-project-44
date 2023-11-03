import getRandomNumber from './functionofRandom.js';
import engine from './index.js';

function calculation(getRandomSymbol) {
  let trueAnswer = 0;
  const numbers1 = getRandomNumber(1, 100);
  const numbers2 = getRandomNumber(1, 100);
  switch (getRandomSymbol) {
    case '-':
      trueAnswer = numbers1 - numbers2;
      break;
    case '+':
      trueAnswer = numbers1 + numbers2;
      break;
    case '*':
      trueAnswer = numbers1 * numbers2;
      break;
    default:
      throw new Error(`Unknown order state: '${getRandomSymbol}'!`);
  }
  const question = (`${numbers1} ${getRandomSymbol} ${numbers2}`);
  return [trueAnswer, question];
}
function mathSymbols() {
  const randomSymbols = getRandomNumber(0, 2);
  const symbols = ['-', '+', '*'];
  const getRandomSymbol = symbols[randomSymbols];
  return calculation(getRandomSymbol);
}
export default function brainCalc() {
  engine('What is the result of the expression?', mathSymbols);
}
