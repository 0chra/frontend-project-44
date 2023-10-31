import number from './system_functions/functionofRandom.js';
import randomSymbols from './system_functions/functionRandomSymblos.js';
import engine from './index.js';

export default function brainCalc(){
  let trueAnswer = 0;
  const symbols = ['-', '+', '*'];
  const numbers1 = number(1, 100);
  const numbers2 = number(1, 100);
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
    default:
      break;
  }
  return[trueAnswer, question];
}
engine('What is the result of the expression?', brainCalc);