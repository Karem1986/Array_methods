const patients = require("./patients");
const firstPatient = patients[0];
const secondPatient = patients[1]
const thirdPatient = patients[2]

//Display patients data 

for(let i = 0; i < patients.length; i++) {
 console.log( "What is index?", i); 
 console.log(patients[i].firstName + " " + patients[i].lastName)
}

// DIY's
// 1. assign the weight, age and height of the firstPatient to variables weight, age and height
//Destructuring syntax 
// const weight = firstPatient.weight
// const age = firstPatient.age 
// const height = firstPatient.height
//using destructring syntax:
//  const { weight, age, height } = firstPatient
//  console.log(age)


// 2. declare a variable fullName and assign it to the firstName and lastName of the firstPatient
// const {firstName, lastName} = firstPatient
// const fullName = `${firstName} ${lastName}`
// console.log(fullName) //Cindy Doheman 

//Practice: do the same with secondPatient 
// const { firstName, lastName} = thirdPatient
// const fullName = `${firstName} ${lastName}`
// console.log(fullName)


// 3. if the firstPatient does not exercise, console.log: "does not exercise" else console.log: "this patient exercises"
// if(firstPatient.dailyExercise === 'no' ){
//     console.log('does not exercise')
// } else {
//     console.log('this patient exercises')
// }

// https://reader.codaisseur.com/courses/beginner-bootcamp/03-js-basics-3/03-arrays-and-objects/03-practice