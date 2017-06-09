function smallestCommons(arr) {

  var test;
  arr = arr.sort();
  var lcm = arr[1];

  while(true){
    test = true;

    for(var j = arr[0]; j < arr[1]; j++){
      if(lcm % j !== 0){
        test = false;
      }
    }

    if(test){
      break;
      
    }
   lcm += arr[1];

  }

  return lcm;
}
smallestCommons([23, 18]);
