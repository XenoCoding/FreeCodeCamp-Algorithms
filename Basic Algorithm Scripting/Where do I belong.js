function getIndexToIns(arr, num) {
  
  var numberSort = function (a,b) {
    return a - b;
  };

  var placeHolder = arr.sort(numberSort);
  
  for(var i = 0; i < placeHolder.length; i++){
    
    if(num <= placeHolder[0]){
      num = 0;
      return num;
    }
    
    
    if(num >= placeHolder[i] && num <= placeHolder[i+1]){
      num = i+1;
      return num;
    }

    if(num >= placeHolder[placeHolder.length-1]){
      num = placeHolder.length;
      return num;
    }
    
  }
  
  
}

getIndexToIns([2, 5, 10], 15);
