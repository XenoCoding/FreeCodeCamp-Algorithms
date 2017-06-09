function fearNotLetter(str) {
  
  var charCodes = [];
  var missingChar;
  var missingLetter;
  str = str.split("");
  
  for(var i = 0; i < str.length; i++){
    charCodes.push(str[i].charCodeAt());
  }
  
  var j = 0;
  while(j < charCodes.length){
    if(charCodes[j+1] - charCodes[j] !== 1 && j !== charCodes.length - 1){
      missingChar = charCodes[j] + 1;
      missingLetter = String.fromCharCode(missingChar);
      break;
    }
 
    j++;
  }
  
  return missingLetter;
}

fearNotLetter("abcd");
