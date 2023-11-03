import getRandomNumber from './functionofRandom.js';
import engine from './index.js';

function randomSymbols(symb) {
  const randomIndex = Math.floor(Math.random() * symb.length);
  const item = symb[randomIndex];
  return item;
}
function calculation() {
  let trueAnswer = 0;
  const symbols = ['-', '+', '*'];
  const numbers1 = getRandomNumber(1, 100);
  const numbers2 = getRandomNumber(1, 100);
  const symbol = randomSymbols(symbols);
  const question = (`${numbers1} ${symbol} ${numbers2}`);
  switch (symbol) {
    case '-':
      trueAnswer = numbers1 - numbers2;
      break;
    case '+':
      trueAnswer = numbers1 + numbers2;
      break;
    case '*':
      trueAnswer = numbers1 * numbers2;
      break;
  }
  return [trueAnswer, question];
}
export default function brainCalc() {
  engine('What is the result of the expression?', calculation);
}
