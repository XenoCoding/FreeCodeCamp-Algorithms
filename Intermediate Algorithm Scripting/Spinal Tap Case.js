function spinalCase(str) {
  
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/ /g, '-').replace(/_/g, '-').toLowerCase();
  
  return str;
}

spinalCase('thisIsSpinalTap');
