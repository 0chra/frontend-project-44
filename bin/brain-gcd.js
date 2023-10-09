console.log('Welcome to the Brain Games');
const readlineSync = require('readline-sync');
const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
console.log('Find the greatest common divisor of given numbers.');
function number(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
let i = 0;
do {
    const numbers1 = number(1, 100);
    const numbers2 = number(1, 100);
    console.log(`Question: ${numbers1} ${numbers2}`);
    const userAnswer = readlineSync.question('');
    function nod () {
        for (var x = arguments[0], i = 1; i < arguments.length; i++) {
          var y = arguments[i];
          while (x && y) {
            x > y ? x %= y : y %= x;
          }
          x += y;
        }
        return x;
      }
    const correctAnswer = nod(numbers1, numbers2);
    if (userAnswer === correctAnswer.toString()){
        console.log('Correct!')
        i+= 1;
    } else {
        return console.log(userAnswer + ' is wrong answer ;(. Correct answer was ' + correctAnswer +'. Lets try again, ' + userName + '!')
    }
} while (i < 3);
if (i = 3){
    console.log ('Congratulations, ' + userName + '!');
}