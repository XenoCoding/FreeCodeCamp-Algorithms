function mutation(arr) {
  
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  
  var contain = arr[1].split("");
  
  for(var i = 0; i < contain.length; i++){
    if(arr[0].indexOf(contain[i]) == -1){
      return false;
    }
  }
  
  return true;
}

mutation(["hello", "heo"]);
