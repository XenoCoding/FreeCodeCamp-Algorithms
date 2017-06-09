function sumAll(arr){
 
 var holder = 0;
  
 function sortNumber(a,b) {
    return a - b;
 }
  
 arr = arr.sort(sortNumber);
 
 for(var i = 0; i < (arr[1] - arr[0]) + 1; i++){
   holder += (arr[0] + i);
 }
 
 return holder;
}

sumAll([10, 5]);
