const patients = require("./patients");
// hardcoding id 4212 for now, we can make this dynamic later
const id = parseInt(process.argv[2])

// const specificPatient = patients.find(function(patient) {
//   console.log("WHAT IS PATIENT?", patient);
//   if (id === patient.id) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log("OUTPUT:", specificPatient);

// const secondPatient = patients.find(function(patient){
//  if (id === patient.id) {
//      return true;
//  } else {
//      return false;
//  }
// })
// console.log('Second patient test', secondPatient)

//Shorter version without if statement 
const specificPatient = patients.find(function(patient){
  return id === patient.id
})
console.log('test short version', specificPatient)