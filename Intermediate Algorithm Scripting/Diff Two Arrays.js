function diffArray(arr1, arr2) {
  
  var newArr = [];
  
  function difference1(item){
    return arr2.indexOf(item) == -1;
  }
  
  function difference2(item){
    return arr1.indexOf(item) == -1;
  }

  var place1 = arr1.filter(difference1);
  var place2 = arr2.filter(difference2); 
  
  newArr = place1.concat(place2);
  
  return newArr;
}

diffArray([1, 3], [1, 2]);
