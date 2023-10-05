console.log('Welcome to the Brain Games');
var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
console.log('What is the result of the expression?');
function number(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function randomSymbols(symb) {
    const randomIndex = Math.floor(Math.random() * symb.length);
    const item = symb[randomIndex];
    return item;
};
const symbols = ['-', '+', '*'];
let i = 0;
do {
    const numbers1 = number(1, 100);
    const numbers2 = number(1, 100);
    const symbol = randomSymbols(symbols);
    let answer = console.log('numbers1 + symbol + numbers2');
    var readlineSync = require('readline-sync');
    var userAnswer = readlineSync.question('Question: ' + answer);
    switch (randomSymbols){
        case symbol === '-':
            answer = numbers1 - numbers2;
            i+=1;
        break;
        case symbol === '+':
            answer = numbers1 + numbers2;
            i+=1;
        break;
        case symbol === '*':
            answer = numbers1 * numbers2;
            i+=1;
        break;
        default:
            break;
    }
    if (userAnswer === answer){
        console.log('Correct!');
        i+=1;
    } else {
        return console.log(userAnswer + ' is wrong answer ;(. Correct answer was ' + answer +'. Lets try again, ' + userName + '!')
    }
} while (i < 3);
if (i = 3){
    console.log ('Congratulations, ' + userName + '!');
}