
//Importing our array of patients using 'require'

//Practice accessing elements of arrays
const patients = require("./patients");

// accesing elements in an array
const firstPatient = patients[0];

console.log(firstPatient);

//DIY
// - console.log the second patient from the array
const secondPatient = patients[1]
console.log(secondPatient)

// which element to access can also be dependent on a variable
const whichElementOfArray = 9;
const tenthPatient = patients[whichElementOfArray];
// const tenthPatient = patients[9];

console.log(tenthPatient);

// - console.log the last patient from the array
const lastPatient = patients[19]
console.log(lastPatient)

