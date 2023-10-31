import engine from './index.js';
import number from './system_functions/functionofRandom.js';

export default function brainGcd() {
  function nod(...theArgs) {
    const arg = theArgs[0];
    const argLenght = theArgs.length;
    let pointNOD = arg;
    for (let pointsFor = 1; pointsFor < argLenght; pointsFor += 1) {
      const argPoints = theArgs[pointsFor];
      let pointsComparison = argPoints;
      while (pointNOD && pointsComparison) {
        if (pointNOD > pointsComparison) {
        pointNOD %= pointsComparison;
      } else {
        pointsComparison %= pointNOD;
      }
      pointNOD += pointsComparison;
    }
    return pointNOD;
  }
  const numbers1 = number(1, 100);
  const numbers2 = number(1, 100);
  const question = (`${numbers1} ${numbers2}`);
  const trueAnswer = nod(numbers1, numbers2);
  return [trueAnswer, question];
}
engine('Find the greatest common divisor of given numbers.', brainGcd);
