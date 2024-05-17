//Write a JavaScript function to print all the methods in a JavaScript object.

function all_properties(obj){
    return Object.getOwnPropertyNames(obj);
}
console.log(all_properties(Array));