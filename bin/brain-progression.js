console.log('Welcome to the Brain Games');
const { first } = require('lodash');
const readlineSync = require('readline-sync');
const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
console.log('What is the result of the expression?');
function number(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
let k = 0;
do  {
  const arrayLenght = number(5, 10);
  const firstNumber = number(1, 100);
  const step = number(1, 10);
  let result = [];
  function array(){ 
    result[0] = firstNumber;
    for (i = 1; i < arrayLenght; i++){
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
    k+=1;
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${hiddenObj}. \nLets try again, ${userName}!`);
    return;
  }
}while (k < 3);
if (i = 3){
  console.log ('Congratulations, ' + userName + '!');
}


