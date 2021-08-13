// My age variable
const myAge = 22;
// my earlyYears variable
let earlyYears = 2;
earlyYears *= 10.5;
// setting laterYears age
let laterYears = myAge - 2;
// dog years by later years
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
// setting myAgeInYears variable
let myAgeInDogYears = earlyYears + laterYears;
// changing my name to lower case letters
let myName = "Solomon Asiedu".toLowerCase();
// printing user's name, human and age in dog years
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`
);
