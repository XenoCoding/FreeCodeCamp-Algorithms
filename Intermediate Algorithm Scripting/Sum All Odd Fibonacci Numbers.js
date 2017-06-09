function sumFibs(num) {
  
  var fibonacci = [1, 1];
  var sum = 0;
  
  for(var i = 0; fibonacci[fibonacci.length - 1] < num; i++){
    
    if((fibonacci[i] + fibonacci[i+1]) <= num){
      
      fibonacci.push(fibonacci[i] + fibonacci[i+1]);
      
    }
    else{
      break;
    }
    
  }
  
  for(var j = 0; j < fibonacci.length; j++){
    if(fibonacci[j] % 2 === 0){
      fibonacci.splice(j, 1);
    }
  }
  
  for(var k = 0; k < fibonacci.length; k++){
    sum += fibonacci[k];
  }
  
  return sum;
}

sumFibs(75025);
