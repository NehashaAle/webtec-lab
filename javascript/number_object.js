// Exponential
let input = 8.664;
let output = input.toExponential();
let output1 = input.toExponential(2);
let output2 = input.toExponential(4);
let output3 = input.toExponential(7);

console.log(output);
console.log(output1);
console.log(output2);
console.log(output3);

// toFixed
var value = 5.56789;
const fixed1 = value.toFixed();
const fixed2 = value.toFixed(2);
console.log(fixed1);
console.log(fixed2);
// toPrecision

let v1 = 5.56789;
const o1 = v1.toPrecision(4);
console.log(o1);

let v2 = 213.45689;
const o2 = v2.toPrecision(4);
console.log(o2);

// Math
let i = 4.6;
let out1 = Math.round(i);
let out2 = Math.ceil(i);
let out3 = Math.floor(i);
let out4 = Math.trunc(i);

console.log("Round up of " + i + " is", out1);
console.log("Ceiling value of " + i + " is", out2);
console.log("Floor value of " + i + " is", out3);
console.log("Truncation value of " + i + " is", out4);

let a = Math.sign(-4);
let b = Math.sign(5);
let c = Math.sign(0);

console.log(a); //-1 for negative
console.log(b); // 1 for positive
console.log(c);

console.log("Power (4^2):", Math.pow(4, 2));

console.log("Square Root of 16:", Math.sqrt(81));

let negativeNum = -20.68;
console.log("Absolute Value:", Math.abs(negativeNum));

let min = Math.min(0, 1, -5, 11);
let max = Math.max(5, -9, 0, 17);

console.log("Minimun: ", min);
console.log("Maximum: ", max);
