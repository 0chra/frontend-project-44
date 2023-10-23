#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { number } from './system_functions/functionofRandom.js';
import { randomSymbols } from './system_functions/functionRandomSymblos.js';

let pointsForCycle = 0;
let correctAnswer = 0;
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');
const symbols = ['-', '+', '*'];
do {
  const numbers1 = number(1, 100);
  const numbers2 = number(1, 100);
  const symbol = randomSymbols(symbols);
  console.log(`Question: ${numbers1} ${symbol} ${numbers2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  switch (symbol) {
  case '-':
    correctAnswer = numbers1 - numbers2;
    break;
  case '+':
    correctAnswer = numbers1 + numbers2;
    break;
  case '*':
    correctAnswer = numbers1 * numbers2;
    break;
  default:
    break;
  }
  if (userAnswer === correctAnswer.toString()) {
    console.log('Correct!');
    pointsForCycle += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    break;
  }
} while (pointsForCycle < 3);
if (pointsForCycle === 3){
  console.log ('Congratulations, ' + userName + '!');
}
