import number from './system_functions/functionofRandom.js';
import engine from './index.js';

export default function brainEven() {
  const randomNumber = number(1, 100);
  let trueAnswer = '';
  const question = randomNumber;
  randomNumber % 2 === 0 ? trueAnswer = 'yes' : trueAnswer = 'no';
  return [trueAnswer, question];
}
engine('Answer "yes" if the number is even, otherwise answer "no".', brainEven);
