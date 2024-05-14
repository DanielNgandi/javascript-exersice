let obj = {};
obj[1] = 'One';
obj['1'] = 'String One';

console.log(obj[1]);
console.log(obj['1']);
console.log(obj[1] === obj['1']);

// the output is
// String one
// String one
// true
// console.log(obj[1])  this log the value assigned to property with the key 1, output is 'string 0ne' because this was the last value assigned
// console.log(obj['1']) this again log the value assigned to property with the key 1,same output as the previous line.
// console.log(obj[1] === obj['1']) this compares the value retrieved using both keys(1 and "1") since they point to the same property with the same value the comparison retuns TRUE
 