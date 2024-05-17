// Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
function swapKeysAndValues(obj) {
    var result = {};
    for (var key in obj) {
      result[obj[key]] = key;
    }
    return result;
  }
  
  var obj = { a: 'x', b: 'y', c: 'z' };
  var swappedObj = swapKeysAndValues(obj);
  console.log(swappedObj);
  