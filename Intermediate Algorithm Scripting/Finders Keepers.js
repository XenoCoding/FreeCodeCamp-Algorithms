function findElement(arr, func) {
  
  var num;
  
  for(var i = 0; i < arr.length; i++){
    if(func(arr[i])){
      num = arr[i];
      break;
    }
  }
  
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
