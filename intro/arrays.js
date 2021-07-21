const animals = ['🐱', '🐶', '🦁', '🦊', '🐯'];

const cars = ['🚗', '🚙', '🏎', '🚕', '🚓'];

const sports = ['⚽️', '🏀', '🏈', '🏐', '🎾', '🏉'];

const professionals = ['👨🏽‍🏫', '👩‍🍳', '👨🏽‍🌾', '👨🏼‍⚖️'];

const numbers = [1, 66, 48, 9, 23, 19, 20, 66, 30];

const vowels = ['a', 'e', 'i', 'o', 'u'];

const teams = ['Lakers', 'Nets', 'Clippers', 'Mavericks'];

const storageUnit = ['art', 'pots', 'yearbook', 'shoes', 'lucky socks'];

const differentArray = [1, 'two', '3', 4, 'five', 6, '7', 'eight', 9, '10'];

const twoDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// my arrays

const favoriteArtists = ["Paloma Faith", "George Michael", "Little Mix"];

const randomEmojis = ["😑", "🧐", "🤩", "🤓"];

const mechaPodzilla = ["Josh", "Avery", "Chris", "James", "Jason", "Joe", "Stephen", "Tibor", "Charlene"];
const eliteCoders = ['Rome', 'Janeth', 'Daniel', 'Dave', 'Cody', 'Sebastian', 'Ariel', 'Jesse', 'Tyler'];
const theDevLeague = ['Paula', 'Brandon', 'Thomas', 'Paul', 'Evan', 'Aaron', 'Brianna', 'Maurice', 'Amanda'];
const reallyCoolPodName = ['Brian', 'Jordan', 'Vinny ', "Edward", 'Omar', 'Anthony', 'Edison', 'Jeremy'];
const my2DArray = [eliteCoders, theDevLeague, mechaPodzilla, reallyCoolPodName];

// const my2DArray = [["Rena", "Milo", "Balou"], ["Charlie", "Coco"], ["Nala", "Simba", "Fred"]];

// methods

let carsAndProfessionals = cars.concat(professionals);
carsAndProfessionals;
(9) ["🚗", "🚙", "🏎", "🚕", "🚓", "👨🏽‍🏫", "👩‍🍳", "👨🏽‍🌾", "👨🏼‍⚖️"]  //this made a new const with both arrays concactenated. however cars and professionals are still unchanged

theDevLeague.indexOf('Brianna') // shows the brianna's placement in the index is at index 6

professionals.pop(); //removes last element in an array

professionals.push(); // adds an element to the end of an array

cars.includes("rome") // checks to see if something is included in the array. will return a true or false


let stringOfNumbers = numbers.toString();
//undefined
//numbers
//(9) [1, 66, 48, 9, 23, 19, 20, 66, 30]
//stringOfNumbers
//"1,66,48,9,23,19,20,66,30"
stringOfNumbers.split(","); //turns a string into an array
//(9) ["1", "66", "48", "9", "23", "19", "20", "66", "30"]


teams.reverse(); //reverses order off array
console.log(teams);

teams.sort(); // puts array in alphabetical order
console.log(teams);

teams.shift(); //removes first element of an array
console.log(teams);

teams.unshift("Blazers"); //adds an element to rhe beginning of an array
console.log(teams);

for (let i = 0; i < teams.length; i++){
    let teamElement = teams[i]; //creates new varfiable for loop and sets it equal to i which is 0 which is the beginning of the array. 0 id less than the length of the array (which is four), prints it and then conitnues to the next number
    // teamElement is an intermediate variable that only works for this loop
    console.log(teamElement + " Stadium");
    console.log(`${teamElement} Stadium`); 
    //template literal solves the space issue by putting intermediate variables inside ${} and everything inside ``
}

// lab: make 3 examples using a for loop with arrays

for (let i = 0; i < storageUnit.length; i++){
    let unitItem = storageUnit[i];
    console.log(`${unitItem} is in your unit`);
}

for (let i = 0; i < favoriteArtists.length; i++){
    let artist = favoriteArtists[i];
    console.log(`${artist} is playing`);
}

for (let i = 0; i < mechaPodzilla.length; i++){
    let pod = mechaPodzilla[i];
    console.log(`${pod} is a Software Engineer`);
}

// list of different method types for arrays

//concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// map: ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()