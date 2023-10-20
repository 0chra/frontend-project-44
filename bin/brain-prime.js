import readlineSync from 'readline-sync';
import {number} from './system_functions/functionofRandom.js'
import { isPrime } from './system_functions/functionIsPrime.js';
let pointsForCycle = 0;
let correctAnswer = 0;
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
do{
    const primeNumber = number(1, 100);
    console.log (`Question: ${primeNumber}`);
    if (!isPrime(primeNumber)){
        correctAnswer = 'no'
    } else {
        correctAnswer = 'yes'
    }
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer.toString()){
        console.log('Correct!');
        pointsForCycle+=1;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLets try again, ${userName}!`);
        break;
      }
}while (pointsForCycle < 3)
if (pointsForCycle === 3){
  console.log ('Congratulations, ' + userName + '!');
}