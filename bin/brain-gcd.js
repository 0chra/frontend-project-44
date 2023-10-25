#!/usr/bin/env node
import readlineSync from 'readline-sync';
import number from './system_functions/functionofRandom.js';

let pointsForCycle = 0;
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Find the greatest common divisor of given numbers.');
function nod() {
  let pointsForNOD = arguments[0]
  for (let pointsFor = 1; pointsFor < arguments.length; pointsFor += 1) {
    let pointsComparison = arguments[pointsFor];
    while (pointsForNOD && pointsComparison) {
      pointsForNOD > pointsComparison ? pointsForNOD %= pointsComparison : pointsComparison %= pointsForNOD;
    }
    pointsForNOD += pointsComparison;
  }
  return pointsForNOD;
}
do {
  const numbers1 = number(1, 100);
  const numbers2 = number(1, 100);
  console.log(`Question: ${numbers1} ${numbers2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = nod(numbers1, numbers2);
  if (userAnswer === correctAnswer.toString()) {
    console.log('Correct!');
    pointsForCycle += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    break;
  }
} while (pointsForCycle < 3);
if (pointsForCycle === 3) {
  console.log(`Congratulations, ${userName}!`);
}
