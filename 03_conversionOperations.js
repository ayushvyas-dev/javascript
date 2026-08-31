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

//string concatenation
let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2;
console.log(str3);

// if string is first then number is converted to string and concatenated
// if number is first then string is converted to number and added
console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32