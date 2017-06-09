function confirmEnding(str, target) {
  
  var start = str.length - target.length;
  var check = str.substr(start, str.length);
  
  if(check == target){
    return true;
  }
  
  return false; 
}

confirmEnding("This is a long sentence that I am going to check", "o check");
