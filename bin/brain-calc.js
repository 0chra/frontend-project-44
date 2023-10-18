let pointsForCycle = 0;
console.log('Welcome to the Brain Games');
const readlineSync = require('readline-sync');
const userName = readlineSync.question('May I have your name? ');
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
do {
    const numbers1 = number(1, 100);
    const numbers2 = number(1, 100);
    const symbol = randomSymbols(symbols);
    console.log(`Question: ${numbers1} ${symbol} ${numbers2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    switch (symbol){
        case '-':
            correctAnswer = numbers1 - numbers2;
            pointsForCycle+=1;
        break;
        case '+':
            correctAnswer = numbers1 + numbers2;
            pointsForCycle+=1;
        break;
        case '*':
            correctAnswer = numbers1 * numbers2;
            pointsForCycle+=1;
        break;
        default:
            break;
    }
    if (userAnswer === correctAnswer.toString()){
        console.log('Correct!');
    } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLets try again,${userName}!`);
        return;
    }
} while (pointsForCycle < 3);
if (pointsForCycle = 3){
    console.log ('Congratulations, ' + userName + '!');
}