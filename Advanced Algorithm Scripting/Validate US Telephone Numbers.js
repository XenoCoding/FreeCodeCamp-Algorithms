function telephoneCheck(str) {
  
  var valid = true;
  var numbers = [];
  
  str = str.replace(/ /g, '').split('');
  
  for(var i = 0; i  < str.length; i++){
    if(!isNaN(str[i])){
      numbers.push(str[i]);
    }
  }
  
  if(numbers.length === 11 && str[0] != 1){
    valid = false;
  }
  else if(numbers.length > 11 || numbers.length < 10){
    valid = false;
  }
  else if(str.includes(')') && !str.includes('(') || str.includes('(') && !str.includes(')') ){
    valid = false;
  }
  else if(str.includes('?') || str[str.length-1] === ')'){
    valid = false;
  }
  
  return valid;
  
}

telephoneCheck("1 (555) 555-5555");
