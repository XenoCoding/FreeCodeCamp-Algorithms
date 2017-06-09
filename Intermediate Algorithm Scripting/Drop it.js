function dropElements(arr, func) {
  
  var placeHolder = arr;
  
  for(var i = 0; i < arr.length; i++){
    
    if(func(arr[i])){
      
      break;
    }
    
  }
  
  return placeHolder.splice(i, arr.length);
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });
