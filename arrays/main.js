// 1. Write a JavaScript function to check whether an `input` is an array or not.

// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true
let is_array = function(input) {
    if (toString.call(input) === "[object Array]") {
        return true;
    } else {
        return false;
    }
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
// or
function is_array1(arr) {
    if (Array.isArray(arr)) {
        return true;
    } else {
        return false;
    }
}

console.log(is_array1('w3resource'));
console.log(is_array1([1, 2, 4, 0]));
/** *********************************** */

// 2. Write a JavaScript function to clone an array.

// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]
function arrayClone(arr) {
    return arr.slice(0);
}

console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));
/** *********************************** */

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []
function firstElement(arr, n) {
    if (arr == null) {
        return void 0;
    }
    if (n == null) {
        return arr[0];
    }
    if (n < 0) {
        return [];
    }
    return arr.slice(0, n);

    // return arr[0];
}
console.log(firstElement([7, 9, 0, -2]));
console.log(firstElement([],3));
console.log(firstElement([7, 9, 0, -2],3));
console.log(firstElement([7, 9, 0, -2],6));
console.log(firstElement([7, 9, 0, -2],-3));
/** *********************************** */