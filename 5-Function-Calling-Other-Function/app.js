
function ageCalculator(birthYear) {
  return 2021 - birthYear;
}


function career(myBirthYear, yourBirthYear) {
  // console.log(internship, job);
  const myAge = ageCalculator(myBirthYear);
  const yourAge = ageCalculator(yourBirthYear);
  const marriageAge = `I will be married at ${myAge + 10} and you will be married at ${yourAge + 10} years old.`;
  return marriageAge;
}

// Let's say we will both marry after 10 years
console.log(career(1997, 2001));

// console.log(career(1991, 1994));

// No line after return will be execuited
// Same name of argument doesn't matter
// console.log() itself is function

// Function declaration - function can be used before declared.
// function expression - function value is stored in a variable
// Arrow function - Great for one line function

