function truncateString(str, num) {
  
  var start;
  
  if(str.length > num){
    if(num > 3){
      start = str.length - (str.length - (num - 3)); 
    }
    else{
      start = str.length - (str.length - num);
    }
    
    str = str.slice(str[0], start) + "...";
    
    return str;
  }
  
  return str;
}

truncateString("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies turpis nisi, in consectetur lacus semper ac. Suspendisse massa ex, fermentum vel pulvinar sed, pellentesque in nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc varius semper justo, vitae feugiat orci convallis in. Sed in ante pulvinar, pulvinar arcu in, auctor neque.", 50);
