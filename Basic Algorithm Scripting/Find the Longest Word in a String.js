function findLongestWord(str) {
  
  str = str.split(" ");
  
  var long = 0;
  
  for(var i = 0; i < str.length; i++){
    if(str[i].length >= long){
      long = str[i].length;
    }
  }
  
  return long;
  
}

findLongestWord("Definitely is definitely the longest word in this sentence");
