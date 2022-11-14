const prompt = require("prompt-sync")();
let arr= [1,2,3,4,5];
let a= prompt("enter the number = ");
 arr.push(a);
console.log("After adding the number " +arr);