const fibonacci = () => {
    let fibPrev = 1;
    let fibCurr = 1;
    let fibNext = fibPrev + fibCurr;
    let index = 3; 
  
    while (fibNext <= 4000000) 
    {
      fibPrev = fibCurr;
      fibCurr = fibNext;
      fibNext = fibPrev + fibCurr;
      index++;
    }
  
    return index;
  }
  
  console.log(`Index: ${fibonacci()}`);