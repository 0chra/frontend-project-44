console.log('Answer "yes" if the number is even, otherwise answer "no".');
function number(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
let i = 0;
do {
        console.log('{Question: ' + '${number(1, 100)}');
        let readlineSync = require('readline-sync');
        let answer = readlineSync.question('Your answer: '); 
    if (number % 2 === 0 && answer === 'yes'){
        i+= 1;    
        console.log('Correct!');
} else if (number % 2 !== 0 && answer === 'no'){
        i+= 1;
        console.log('Correct!');
} else {
        const  trueAnswer = answer === 'no' ?? 'Yes' : 'no';
        return (answer + 'is wrong answer ;(. Correct answer was ${trueAnswer}. Lets try again, ${userName}!');
}
} while (i < 3);
console.log ('Congratulations,' + userName);
