let value = "33";
let num = 20;

// type conversion
let convertToNumber = Number(value);
let convertToString = String(num);

// when string converted to number it bacome NaN 
// when null converted to number it become 0
// when undefined converted to number it become NaN
// when boolean converted to number it become 0 or 1
// but type of NaN is number
// falsy values are 0,null,undefined,NaN,false,""
console.log(typeof(value));
console.log(typeof(num));
console.log(typeof(convertToNumber));