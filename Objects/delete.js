//Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
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

  console.log(myObject);
  delete myObject.rollno;
  console.log(myObject);