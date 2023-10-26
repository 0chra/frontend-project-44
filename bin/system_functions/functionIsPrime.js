export default function isPrime(number) {
  if (number === 1) {
    isTrue = false;
    return isTrue;
  } else if (number === 2) {
    isTrue = true;
    return isTrue;
  } else {
    for (let x = 2; x < number; x += 1) {
      if (number % x === 0) {
        isTrue = false;
        return isTrue;
      }
    }
    return true;
  }
}
