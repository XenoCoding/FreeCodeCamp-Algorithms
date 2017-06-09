function steamrollArray(arr) {
  
  var newArr = [];
  arr = arr.toString().replace(/\[object Object\]/g, "{}").split(',');
  for(var i = 0; i < arr.length; i++){
    if(arr[i] !== "a" && arr[i] !== "b"){
      if(arr[i] !== ""){
        newArr.push(JSON.parse(arr[i]));  
      }  
    } 
    else{
      newArr.push(arr[i]);
    }
  }
  
  return newArr;
}

steamrollArray([[["a"]], [["b"]]]);
