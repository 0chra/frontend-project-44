#!/usr/bin/env node
import engine from './index.js';
import number from './system_functions/functionofRandom.js';
import isPrime from './system_functions/functionIsPrime.js';

export default function brainPrime() {
  let trueAnswer = '';
  const primeNumber = number(1, 100);
  const question = primeNumber;
  if (!isPrime(primeNumber)) {
    trueAnswer = 'no';
  } else {
    trueAnswer = 'yes';
  }
  return[trueAnswer, question];
};
engine('Answer "yes" if given number is prime. Otherwise answer "no".', brainPrime);