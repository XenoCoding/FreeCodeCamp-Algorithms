function chunkArrayInGroups(arr, size) {
  
  var newArray = [];
  
  for(var i = 0; i < arr.length; i += size){
    newArray.push(arr.slice(i, i + size));
  }
  
  return newArray;
}

chunkArrayInGroups(["blah", "dope", "nope", 3, 234, 1, "how", "wow", "this is great"], 4);
