// Write a JavaScript function to retrieve all the values of an object's properties.
function getAllPropertyValues(obj) {
    return Object.values(obj);
  }
  var obj = { a: 1, b: 2, c: 3, d:4, e:5 };
  var propertyValues = getAllPropertyValues(obj);
  console.log(propertyValues);
  