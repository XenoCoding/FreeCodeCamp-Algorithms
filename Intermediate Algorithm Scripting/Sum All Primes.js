function sumPrimes(num) {
  
  var sum = 0;
  
  function isPrime(value) {
    for(var i = 2; i < value; i++) {
      if(value % i === 0) {
        return false;
      } 
    } 
    return value > 1;
  } 
  
  for(var i = 0; i <= num; i++){
    if(isPrime(i) === true){
      sum += i;
    }
  }
  
  return sum;
}

sumPrimes(10);
