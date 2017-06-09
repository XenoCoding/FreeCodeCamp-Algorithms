function translatePigLatin(str) {
  
  var index;
  var consonants;
  str = str.split('');
  
  var vowels = /[aeiou]/;
  
  if(vowels.test(str[0])){
    str.push("way");
    str = str.join('');
  } else{
    for(var i = 0; !vowels.test(str[i]); i++){
      index = i + 1;
    }
    
    str = str.join('');
    consonants = str.substr(0, index);
    
    str = str.substr(index, str.length) + consonants + "ay";
  }
  
  return str;
}

translatePigLatin("glove");
