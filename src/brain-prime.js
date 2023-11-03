#!/usr/bin/env node
import engine from './index.js';
import getRandomNumber from './functionofRandom.js';

function isPrime(number) {
  if (number === 1) {
    const isTrue = false;
    return isTrue;
  }
  if (number === 2) {
    const isTrue = true;
    return isTrue;
  }
  if (number !== 1 && number !== 2) {
    for (let x = 2; x < number; x += 1) {
      if (number % x === 0) {
        const isTrue = false;
        return isTrue;
      }
    }
  }
  return true;
}
function primeNumber() {
  const primeNumber = getRandomNumber(1, 100);
  const question = primeNumber;
  const trueAnswer = !isPrime(primeNumber)? 'no' : 'yes';
  return [trueAnswer, question];
}
export default function brainPrime() {
  engine('Answer "yes" if given number is prime. Otherwise answer "no".', primeNumber);
}
