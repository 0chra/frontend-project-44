import { question } from 'readline-sync';
import engine from './index.js';
import number from './system_functions/functionofRandom.js';

export default function brainGcd() {
function nod(...theArgs) {
  const arg = theArgs[0];
  const argLenght = theArgs.length;
  let pointsNOD = arg;
  for (let pointsFor = 1; pointsFor < argLenght; pointsFor += 1) {
    const argPoints = theArgs[pointsFor];
    let pointsComparison = argPoints;
    while (pointsNOD && pointsComparison) {
      pointsNOD > pointsComparison ? pointsNOD %= pointsComparison : pointsComparison %= pointsNOD;
    }
    pointsNOD += pointsComparison;
  }
  return pointsNOD;
}
const numbers1 = number(1, 100);
const numbers2 = number(1, 100);
const question = (`${numbers1} ${numbers2}`);
const trueAnswer = nod(numbers1, numbers2);
return [trueAnswer, question]
};
engine('Find the greatest common divisor of given numbers.',brainGcd);
