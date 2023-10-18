let pointsForCycle = 0;
console.log('Welcome to the Brain Games');
const readlineSync = require('readline-sync');
const userName = readlineSync.question('May I have your name? ');
console.log('Hi, ' + userName + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
function number(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
};

do {
        const numbers = number(1, 100);
        console.log('Question:' + numbers);
        let readlineSync = require('readline-sync');
        let userAnswer = readlineSync.question('Your answer: '); 
    if (numbers % 2 === 0 && answer === 'yes'){
        pointsForCycle+= 1;    
        console.log('Correct!');
} else if (numbers % 2 !== 0 && answer === 'no'){
        pointsForCycle+= 1;
        console.log('Correct!');
} else {
        const trueAnswer = answer === 'no' ? 'yes' : 'no';
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}. \nLets try again,${userName}!`);
        return;
}
} while (pointsForCycle < 3);
if (pointsForCycle = 3){
        console.log ('Congratulations, ' + userName + '!');
}
