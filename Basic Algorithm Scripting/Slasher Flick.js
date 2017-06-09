function slasher(arr, howMany) {
  
  for(var i = 1; i <= howMany; i++){
    arr.shift();
  }
  
  return arr;
}

slasher([1, 2, 3], 2);
