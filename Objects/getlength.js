
//Write a JavaScript program to get the length of a JavaScript object.
//Sample object
//:
//var student = {
//name : "David Rayy",
//sclass : "VI",
//rollno : 12 };

var myObject = {
    Name: "David rayy",
    sclass: "VI",
    rollno: 12
  };
  function getObjectLength(obj) {
    return Object.keys(obj).length;
  }
  
  var lengthOfmyObject = getObjectLength(myObject);
  console.log(lengthOfmyObject);