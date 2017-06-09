function convertHTML(str) {
  
  var placeHolder = str.split('');
  
  for(var i = 0; i < placeHolder.length; i++){
    switch(placeHolder[i]){
      case '&':
        placeHolder[i] = '&amp;';
        break;
      case '<':
        placeHolder[i] = '&lt;';
        break;
      case '>':
        placeHolder[i] = '&gt;';
        break;
      case '"':
        placeHolder[i] = '&quot;';
        break;
      case "'":
        placeHolder[i] = '&apos;';
        break;
    }
  }
  
  str = placeHolder.join('');
  
  return str;
}

convertHTML("Dolce & Gabbana");
