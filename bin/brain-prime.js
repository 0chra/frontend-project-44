console.log('Welcome to the Brain Games');
const readlineSync = require('readline-sync');
const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
function number(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
let k = 0;
function isPrime(){
    for (i = 2; i < primeNumber; i++) {
        if (primeNumber % i === 0) {return false};
      return primeNumber !== 1;
    }
};
do{
    const primeNumber = number(1, 100);
    console.log (`Question: ${primeNumber}`);
    if (isPrime(primeNumber) === false){
        correctAnswer = 'no'
    } else {
        correctAnswer = 'yes'
    }
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer.toString()){
        console.log('Correct!');
        k+=1;
      } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLets try again, ${userName}!`);
        return;
      }
}while (k < 3)
console.log ('Congratulations, ' + userName + '!');