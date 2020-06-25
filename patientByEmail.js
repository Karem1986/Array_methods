// patientByEmail.js
const patients = require("./patients");
// const email = "radolthineg@mayoclinic.com";

// console.log(patients);

// let specificPatient = patients.find(function(patient){
//     return email === patient.email
// })

// console.log('test patient email', specificPatient);

//Find by phone number 
const number = process.argv[2];

let phoneNumber = patients.find(function(patient){
    // console.log(patient);

    return patient.phoneNumber === number 
})

console.log('test Scott numner', phoneNumber)
