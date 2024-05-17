//write a JavaScript function to retrieve all the names of an object's own and inherited properties.
function getAllPropertyNames(obj) {
    var allPropertyNames = [];
    var currentObj = obj;
    while (currentObj) {
      var ownPropertyNames = Object.getOwnPropertyNames(currentObj);
      allPropertyNames = allPropertyNames.concat(ownPropertyNames);
      currentObj = Object.getPrototypeOf(currentObj);
    }
    return Array.from(new Set(allPropertyNames));
  }
  var obj = {
    a: 1,
    b: 2
  };
  
  var inheritedObj = Object.create(obj);
  inheritedObj.c = 3;
  
  var allPropertyNames = getAllPropertyNames(inheritedObj);
  console.log(allPropertyNames);
  