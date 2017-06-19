function sym(args) {
  
  var total = [].slice.call(arguments);
  
  function getDiff(array1, array2){
    
    var nums = [];
    
    for(var i = 0; i < array1.length; i++){
      if(array2.indexOf(array1[i]) < 0 && nums.indexOf(array1[i]) < 0){
        nums.push(array1[i]);  
      }
    }
    
    array2.forEach(function(item){
      if(array1.indexOf(item) < 0 && nums.indexOf(item) < 0){
        nums.push(item);  
      }
    });
    
    return nums;
  }
  
  return total.reduce(getDiff);
}

sym([1, 2, 3], [5, 2, 1, 4]);
