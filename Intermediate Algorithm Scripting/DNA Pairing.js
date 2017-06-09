function pairElement(str) {
  
  var dnaArray = [];
  str = str.split('');
  
  for(var i = 0; i < str.length; i++){
    
    if(str[i] === 'G'){
      dnaArray.push(['G', 'C']);
    }
    if(str[i] === 'C'){
      dnaArray.push(['C', 'G']);
    }
    if(str[i] === 'A'){
      dnaArray.push(['A', 'T']);
    }
    if(str[i] === 'T'){
      dnaArray.push(['T', 'A']);
    }
    
  }
  
  return dnaArray;
}

pairElement("GCG");
