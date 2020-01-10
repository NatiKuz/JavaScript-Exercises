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

// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]
function lastElement(arr, n) {
    if (arr == null) {
        return void 0;
    }
    if (n == null) {
        return arr[arr.length - 1];
    }
    return arr.slice(Math.max(arr.length - n, 0));
}
console.log(lastElement([7, 9, 0, -2]));
console.log(lastElement([7, 9, 0, -2],3));
console.log(lastElement([7, 9, 0, -2],6));
/** *********************************** */

// 5. Write a simple JavaScript program to join all elements of the following array into a string.

// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join(' '));
console.log(myColor.join('+'));
/** *********************************** */

// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
// For example if you accept 025468 the output should be 0-254-6-8.
const num = window.prompt();
const str = num.toString();
const result = [str[0]];

for (let x = 1; x < str.length; x++) {
    if ((str[x-1] % 2 === 0) && (str[x] % 2 === 0)) {
        result.push('-', str[x]);
    } else {
        result.push(str[x]);
    }
}
console.log(result.join(''));
/** *********************************** */

// 7. Write a JavaScript program to sort the items of an array.

// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
let arr1 = [-3,8,7,6,5,-4,3,2,1];
let arr2 = [];
let min = arr1[0];
let pos;
let max = arr1[0];
for (let i = 0; i < arr1.length; i++) {
    if (max < arr1[i]) {
        max = arr1[i];
    }
}

for (let i = 0; i < arr1.length; i++) {

    for (let j = 0; j < arr1.length; j++) {

        if (arr1[j] !== "x") {

            if (min > arr1[j]) {
                min = arr1[j];
                pos = j;
            }
        }
    }
    arr2[i] = min;
    arr1[pos] = "x";
    min = max;
}
console.log(arr2);
/** *********************************** */

// 8. Write a JavaScript program to find the most frequent item of an array.

// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
let arra = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let mf = 1;
let m = 0;
let item;
for (let i = 0; i < arra.length; i++) {

    for (let j = i; j < arra.length; j++) {

        if (arra[i] === arra[j]) {
            m++;
        }
        if (mf < m) {
            mf = m;
            item = arra[i];
        }
    }
    m = 0;
}
console.log(item+" ( " +mf +" times ) ");
/** *********************************** */

// 9. Write a JavaScript program which accept a string as input and swap the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

let str1 = 'cFDSHFJHGK HJkjhkjhl';
let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let LOVER = 'abcdefghijklmnopqrstuvwxyz';
let result1 = [];

for (let x = 0; x < str1.length; x++) {

    if (UPPER.indexOf(str1[x]) !== -1) {
        result1.push(str1[x].toLowerCase());
    } else if (LOVER.indexOf(str1[x]) !== -1) {
        result1.push(str1[x].toUpperCase());
    } else {
        result1.push(str1[x]);
    }
}
console.log(result1.join(''));
/** *********************************** */