function destroyer(arr) {
  
  var args = Array.prototype.slice.call(arguments);  
  args.splice(0, 1);
  var placeHolder = [];
  
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < args.length; j++){
      if(arr[i] == args[j]){
        delete arr[i];
      }
    }
  }
  
  placeHolder = arr.filter(remove);
  
  return placeHolder;
}

function remove(value){
  return Boolean(value);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
