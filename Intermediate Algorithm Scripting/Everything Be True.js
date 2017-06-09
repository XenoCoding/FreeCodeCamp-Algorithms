function truthCheck(collection, pre) {
  var truth = true;
  for(var i = 0; i < collection.length; i++){
    if(!collection[i].hasOwnProperty(pre) || !collection[i][pre]){
      truth = false;
    }  
  }
  return truth;
}

truthCheck([{"single": "yes"}], "single");
