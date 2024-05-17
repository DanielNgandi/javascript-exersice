//Write a JavaScript function to check whether an object contains a given property.
function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
  }
  var obj = { a: 1, b: 2, c: 3 };
  console.log(hasProperty(obj, 'a')); 
  console.log(hasProperty(obj, 'd'));
  