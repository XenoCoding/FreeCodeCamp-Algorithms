function largestOfFour(arr) {
  
  var largest = [];
  
  for(var i = 0; i < arr.length; i++){
    
    var large = 0;
    
    for(var j = 0; j < arr[i].length; j++){
      
      if(arr[i][j] > large){
        large = arr[i][j];
      }
      
      else{        
        var index = arr[i].indexOf(arr[i][j]);
        arr[i].splice(index, arr[i][j]);
      }
      
    }
    
    largest.push(large);
  }
  
  return largest;
}

largestOfFour([[1143, 237, 118, 206], [44, 65, 7541, 33], [32, 312345, 371, 3943], [1010, 11, 158, 89]]);
