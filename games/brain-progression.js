import readlineSync from 'readline-sync';
import {number} from './system_functions/functionofRandom.js'
let pointsForCycle = 0;
console.log('Welcome to the Brain Games');
const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
console.log('What is the result of the expression?');
do  {
  const arrayLenght = number(5, 10);
  const firstNumber = number(1, 100);
  const step = number(1, 10);
  let result = [];
  function array(){ 
    result[0] = firstNumber;
    for (let i = 1; i < arrayLenght; i++){
      result[i] = result[i - 1] + step;
    }
    return result;
  };
  const arr = array();
  const index = Math.abs(arrayLenght - number (1, 9));
  const hiddenObj = arr[index];
  arr[index] = "..";
  console.log(String(arr.join(' ')));
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === hiddenObj.toString()){
    console.log('Correct!');
    pointsForCycle+=1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenObj}'. \nLets try again, ${userName}!`);
    break;
  }
}while (pointsForCycle < 3);
if (pointsForCycle === 3){
  console.log ('Congratulations, ' + userName + '!');
}


