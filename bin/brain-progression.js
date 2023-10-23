#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { number } from './system_functions/functionofRandom.js';

let pointsForCycle = 0;
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What number is missing in the progression?');
do {
  const arrayLenght = number(5, 10);
  const firstNumber = number(1, 100);
  const step = number(1, 10);
  const result = [];
  function array(){ 
    result[0] = firstNumber;
    for (let i = 1; i < arrayLenght; i += 1){
      result[i] = result[i - 1] + step;
    }
    return result;
  };
  const arr = array();
  const index = Math.abs(arrayLenght - number (1, 9));
  const hiddenObj = arr[index];
  arr[index] = "..";
  const string = String(arr.join(' '));
  console.log(`Question: ${string}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === hiddenObj.toString()){
    console.log('Correct!');
    pointsForCycle += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenObj}'. \nLet's try again, ${userName}!`);
    break;
  }
}while (pointsForCycle < 3);
if (pointsForCycle === 3){
  console.log (`Congratulations, ${userName}!`);
}


