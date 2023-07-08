function findFibonacciPosition() {
    let fibPrev = 1;
    let fibCurr = 1;
    let fibNext = fibPrev + fibCurr;
    let position = 3; // Start from the 3rd position
  
    while (fibNext <= 4000000) {
      fibPrev = fibCurr;
      fibCurr = fibNext;
      fibNext = fibPrev + fibCurr;
      position++;
    }
  
    return position;
  }
  
  // Call the function and display the result
  const fibonacciPosition = findFibonacciPosition();
  console.log(`The position/index in the Fibonacci sequence that is greater than 4,000,000 is: ${fibonacciPosition}`);