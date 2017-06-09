function addTogether() {
  var params = [].slice.call(arguments);
  
  if(!params.every(function(param){
    return typeof param === 'number';
  })){
    return undefined;
  }
  
  if(params.length === 2){
    return params[0] + params[1];
  }
  else{
    var firstParam = params[0];
    
    var addOneMore = function(secondParam){
      return addTogether(firstParam, secondParam);
    };
    
    return addOneMore;
  }
  
  return params;
}

addTogether(2,3);
