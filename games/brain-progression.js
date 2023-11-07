import engine from './index.js';
import getRandomNumber from './functionofRandom.js';

function getData() {
  const firstNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 10);
  const arrayLenght = getRandomNumber(5, 10);
  const result = [];
  function array() {
    result[0] = firstNumber;
    for (let i = 1; i < arrayLenght; i += 1) {
      result[i] = result[i - 1] + step;
    }
    return result;
  }
  const arr = array();
  const index = Math.abs(arrayLenght - getRandomNumber(1, 9));
  const hiddenObj = arr[index];
  arr[index] = '..';
  const string = String(arr.join(' '));
  const question = string;
  const trueAnswer = hiddenObj;
  return [trueAnswer, question];
}
export default function brainProgression() {
  engine('What number is missing in the progression?', getData);
}
