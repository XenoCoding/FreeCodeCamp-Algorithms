function palindrome(str) {
  
  str = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
  var reverse = str.split('').reverse().join('');
  
  if (reverse === str){
    return true;
  }
  
  return false;
  
}

palindrome("_eye");
