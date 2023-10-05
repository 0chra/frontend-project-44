console.log('Welcome to the Brain Games');
var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log('Hi, ' + userName + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
export function number(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
};
let i = 0;
do {
        const numbers = number(1, 100);
        console.log('Question:' + numbers);
        let readlineSync = require('readline-sync');
        let answer = readlineSync.question('Your answer: '); 
    if (numbers % 2 === 0 && answer === 'yes'){
        i+= 1;    
        console.log('Correct!');
} else if (numbers % 2 !== 0 && answer === 'no'){
        i+= 1;
        console.log('Correct!');
} else {
        const  trueAnswer = answer === 'no' ? 'yes' : 'no';
        return console.log(answer + ' is wrong answer ;(. Correct answer was ' + trueAnswer +'. Lets try again, ' + userName + '!');
}
} while (i < 3);
if (i = 3){
        console.log ('Congratulations, ' + userName + '!');
}
