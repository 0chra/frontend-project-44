import engine from './index.js';
import number from './system_functions/functionofRandom.js';

export default function brainProgression() {
  const firstNumber = number(1, 100);
  const step = number(1, 10);
  const arrayLenght = number(5, 10);
  const result = [];
  function array() {
    result[0] = firstNumber;
    for (let i = 1; i < arrayLenght; i += 1) {
      result[i] = result[i - 1] + step;
    }
    return result;
  }
  const arr = array();
  const index = Math.abs(arrayLenght - number(1, 9));
  const hiddenObj = arr[index];
  arr[index] = '..';
  const string = String(arr.join(' '));
  const question = string;
  const trueAnswer = hiddenObj;
  return [trueAnswer, question]; 
};
engine('What number is missing in the progression?', brainProgression);