function repeatStringNumTimes(str, num) {
  
  var total = "";
  
  for(var i = 1; i <= num; i++){
    total += str;
  }
  
  return total;
}

repeatStringNumTimes("huckleberry finn ", 127);
