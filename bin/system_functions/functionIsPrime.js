export default function isPrime(number) {
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  } 
  if (number !== 1 && number !== 2) {
    for (let x = 2; x < number; x += 1) {
      if (number % x === 0) {
        return false;
      }
    }
    return true;
  }
}
