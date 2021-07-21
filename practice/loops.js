
// Complete the vowelsAndConsonants function

// vowelsAndConsonants has the following parameters:

// string s: the string to process

// First, print each vowel in  on a new line (in the same order as they appeared in ). Second, print each consonant (i.e., non-vowel) in  on a new line (in the same order as they appeared in ).

// Sample Input 

// javascriptloops

// Sample Output 

// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s

let s = 'javascriptloops'

function vowelsAndConsonants(string) {
    const vowelsList = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < string.length; i++) {
        if (vowelsList.includes(string[i])) {
            // if the vowel list includes the string at the current index
            console.log(s[i])
            // will check the entire string against the vowel list before moving to the else statement
        } else {
            console.log(s[i])
        }
    }
}



vowelsAndConsonants(s)


// second way using for loop

function vowelsAndCons(s) {
    let vowels = ["a", "e", "i", "o", "u"];

    for (let v of s) {
        // gives each element in the string the value v
        if (vowels.includes(v))
            // checks to see if vowels invlude that charcter
            console.log(v);
    }
    // initiates second loop for consonants
    for (let c of s) {
        if (!vowels.includes(c))
            console.log(c);
    }
}
