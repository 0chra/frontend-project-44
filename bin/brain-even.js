#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {number} from './system_functions/functionofRandom.js'
let pointsForCycle = 0;
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
        do {
        const numbers = number(1, 100);
        console.log('Question: ' + numbers);
        let userAnswer = readlineSync.question('Your answer: '); 
if (numbers % 2 === 0 && userAnswer === 'yes'){
        pointsForCycle+= 1;
        console.log('Correct!');
} else if (numbers % 2 !== 0 && userAnswer === 'no'){
        pointsForCycle+= 1;
        console.log('Correct!');
} else {
        const trueAnswer = userAnswer === 'no' ? 'yes' : 'no';
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. \nLets try again,${userName}!`);
        break;
}
} while (pointsForCycle < 3);
if (pointsForCycle === 3){
        console.log ('Congratulations, ' + userName + '!');
}