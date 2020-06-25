const patients = require("./patients");
const height = parseFloat(process.argv[2]);

// console.log(patients);

const heightPatient = patients.filter(function(patient){
   return patient.height > height
}); 

console.log(`Number of patients who are longer than ${height}`, heightPatient.length)