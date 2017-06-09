function whatIsInAName(collection, source) {
  
  var arr = [];
  var selector = source;
  var hasProperty = [];
  var success;
  var finalArr = [];
  var found = false;
  
  for(var i = 0; i < collection.length; i++){
    
    arr.push(collection[i]);
    
  }
  
  for(var j = 0; j < arr.length; j++){
    
    for(var k = 0; k < Object.keys(selector).length; k++){
      
      if(arr[j].hasOwnProperty( Object.keys(selector)[k] ) ){
   
        success = true;
   
      } else{
        success = false;
      }
      
    }
    
    if(success === true){
      hasProperty.push(arr[j]);
    }
    
  }
  
  for(var l = 0; l < hasProperty.length; l++){
    
    for(var m = 0; m < Object.keys(hasProperty[l]).length; m++){
      
      for(var n = 0; n < Object.keys(selector).length; n++){
        
       if(Object.keys(hasProperty[l])[m] === Object.keys(selector)[n]){
         
         if(arr[l][Object.keys(arr[l])[m]] === selector[Object.keys(selector)[n]] && found === false){
           finalArr.push(hasProperty[l]);
           found = true;
         }
         
       }  
        
      }
    }
    
    found = false;
    
  }
  
  return finalArr;
  
}

whatIsInAName([ { "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
