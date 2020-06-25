 const patients = require("./patients");

// declare function
// function displayFullName(patient) {
//   // HERE IS HOW TO CHECK YOURSELF
//   console.log('CHECK TO SEE WHAT IS PATIENT:', patient)
//   const { firstName, lastName } = patient;
 

//   const fullName = `${firstName} ${lastName}`;

//   console.log(fullName);
// }

// // pass as callback
// patients.forEach(displayFullName);

// pass anonymous function directly
patients.forEach(function(patient) {
  // HERE IS HOW TO CHECK YOURSELF
  console.log("CHECK TO SEE WHAT IS PATIENT:", patient);
  const { firstName, age } = patient;

  console.log(`${firstName} - age: ${age}`);
});

// DIY's
// - for each patient log their weight
patients.forEach(function(patient){
    // //CHECK 
    // console.log("CHECK TO SEE WHAT IS patient:", patient)
    // const { firstName, weight} = patient
    // console.log(`${firstName} - weigth: ${weight}`);
});
// - for each patient, log their last name and gender
patients.forEach(function(patient){
    //CHECK 
    // console.log("CHECK TO SEE WHAT IS patient:", patient)
    const { lastName, gender} = patient
    console.log(`${lastName} - gender: ${gender}`);
});

// - for each patient,
//   - if they are of gender 'm' console.log Mr. and their lastName
patients.forEach(function(patient){
    //CHECK 
//     const {lastName, gender} = patient
   const { lastName, gender} = patient //defines the data/variables to be used 
   const genderandName = gender === 'm' 
               ? console.log(`'Mr' ${lastName}`)
               : console.log(`'Mrs' ${lastName}`)
   

//Another try 
      //Check to see what patient is 
    console.log("CHECK TO SEE WHAT IS patient:", patient)
   
});
//   - if they are of gender 'f' console.log Mrs. and their lastName
//Extra practice 
//For each patient log their firstName and email 
patients.forEach(function(patient) {

    const {firstName, email} = patient 
    console.log(`${firstName} and email: ${email}`)

})

patients.forEach(function(patient){

 const { firstName, lastName, age, weight } = patient
 console.log(` The patient is: ${firstName} ${lastName} ${age} ${weight}`)
})


