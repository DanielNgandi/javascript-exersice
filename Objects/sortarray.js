//Write a JavaScript program to sort an array of JavaScript objects

var students = [
    { name: "Jay", age: 21 },
    { name: "polycarp", age: 19 },
    { name: "Bob", age: 23 }
  ];
  

  function sortByProperty(arr, prop) {
    return arr.sort(function(a, b) {
      return a[prop] > b[prop] ? 1 : -1;
    });
  }
  
  var sortedByage = sortByProperty(students, 'age');
  console.log("Sorted by age:", sortedByage);
  
  