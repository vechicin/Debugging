const sumAllFibonacciOdds = function (num) {
  let result = 0;
  let fibonacci = [0,1];
  for (let i = 2; i < num; i++) {
    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
  }
  for (let j = 0; j < fibonacci.length; j++) {
    if (fibonacci[j] % 2 !== 0) {
      result += fibonacci[j];
    }  
  }
  return result;
}