function rot13(str) { 
  str = str.split("").map(cipher).join("");
  return str;
}

function cipher(letter){
  
  var symbolReg = /[^a-zA-Z]/g;
  
  var codeAscii = letter.charCodeAt(0);
  
  if(symbolReg.test(letter)){
    
    return letter;
    
  }
  if(codeAscii > 77){
    
    codeAscii -= 13;
    
  }
  
  else{
    
    codeAscii += 13;
    
  }
  
  return String.fromCharCode(codeAscii);
  
}

rot13("SERR PBQR PNZC");
