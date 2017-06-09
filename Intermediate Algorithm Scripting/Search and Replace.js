function myReplace(str, before, after) {
  
  if(before.charAt(0) === before.charAt(0).toUpperCase()){
    str = str.replace(before, after.charAt(0).toUpperCase() + after.slice(1));
  }else{
    str = str.replace(before, after);
  }
  
  
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
