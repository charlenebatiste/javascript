// factorial = the product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24.

function factorial(n) {
    var result = n;
    if (n === 0 || n === 1)
        return 1;
    while (n > 1) {
        n--;
        result *= n;
    }
    return result;
}