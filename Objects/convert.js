//Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
function objectToList(obj) {
    return Object.entries(obj);
  }

  var obj = { a: 1, b: 2, c: 3 };
  var keyValuePairs = objectToList(obj);
  console.log(keyValuePairs);
  