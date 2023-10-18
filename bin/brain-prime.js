let points = 0;
console.log('Welcome to the Brain Games');
const readlineSync = require('readline-sync');
const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
function isPrime(number){
  if (number === 1)  {
    return false;
  }
  else if (number === 2)  {
    return true;
  } else   {
    for(x = 2; x < number; x+=1) {
      if (number % x === 0) {
        return false;
      }
    }
    return true;  
  }
};
do{
    const primeNumber = randomNumber(1, 100);
    console.log (`Question: ${primeNumber}`);
    if (!isPrime(primeNumber)){
        correctAnswer = 'no'
    } else {
        correctAnswer = 'yes'
    }
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer.toString()){
        console.log('Correct!');
        points+=1;
      } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLets try again, ${userName}!`);
        return;
      }
}while (points < 3)
console.log ('Congratulations, ' + userName + '!');