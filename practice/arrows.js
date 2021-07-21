// Task

// Complete the function in the editor. It has one parameter: an array, . It must iterate through the array performing one of the following actions on each element:

// If the element is even, multiply the element by .
// If the element is odd, multiply the element by .
// The function must then return the modified array.

function modifyArray(nums) {
    var newArray = nums.map(n => (n % 2 == 0) ? n * 2 : n * 3);
    return newArray;

}

nums = [1, 2, 3, 4, 5]

modifyArray(nums)