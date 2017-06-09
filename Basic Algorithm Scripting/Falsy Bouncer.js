function bouncer(arr) {
  
  var holderArray = [];
  
  holderArray = arr.filter(removeFalseVar);
  
  return holderArray;
  
}

function removeFalseVar(value){
  return Boolean(value); 
}

bouncer([7, "ate", "", false, 9]);
