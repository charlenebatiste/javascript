const professionals = ['👨🏽‍🏫', '👩‍🍳', '👨🏽‍🌾', '👨🏼‍⚖️'];
const numbers = [1, 66, 48, 9, 23, 19, 20, 66, 30];
const numbersB = [5, 22, 68, 10];
const vowels = ['a', 'e', 'i', 'o', 'u'];
const teams = ['Lakers', 'Nets', 'Clippers', 'Mavericks'];
const storageUnit = ['art', 'pots', 'yearbook', 'shoes', 'lucky socks'];

// function called add numbers
function addNumbers(numbersArray) {
    // pseucode = plan of attack for code
    // add all numbers in array
    // return a result (what data type is being returned: is it an array,number,object,string,Boolean?)
    // 1. declarations
    let result = 0;

    // 2 - steps to solve the problem or get return
    for (let i = 0; i < numbersArray.length; i++) {
        let temp = numbersArray[i]; // temp is the placement of the array elements
        // console.log(temp);

        result += temp; // this says result = result + 
        // result = result + temp    is another way to write the previous line
    }

    // 3 - return will be the result
    return result;
}

console.log(addNumbers(numbers));
console.log(addNumbers(numbersB));

// another example

const romeObject = {
    name: 'Rome',
    location: 'LA',
    team: 'Lakers',
}

// want to make a function that returms teamName
 function teamName(object) {
    return object.team // will go to the parameter that is passed, look for the team and return it. if no team it will return undefined
 }

 console.log(teamName(romeObject));