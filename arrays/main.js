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

// 10. Write a JavaScript program which prints the elements of the following array.

// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------
let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
for (let i in a) {
    console.log("row " + i);
    for (let j in a[i]) {
        console.log(" " + a[i][j]);
    }
}
/** *********************************** */

// 11. Write a JavaScript program to find the sum of squares of a numeric vector.
function sum_sq(array) {
    let sum = 0,
        i = array.length;
    while (i--) {
        sum += Math.pow(array[i], 2);
    }
    return sum;
}
console.log(sum_sq([0,1,2,3,4]));
/** *********************************** */

// 12. Write a JavaScript program to compute the sum and product of an array of integers.
let array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) {
    s += array[i];
    p *= array[i];
}
console.log('Sum : '+s + ' Product : ' +p);
/** *********************************** */

// 13. Write a JavaScript program to add items in an blank array and display the items.
let x = 0;
let array1 = Array();

function add_element_to_array() {
    array[x] = document.getElementById("text1").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("text1").value = "";
}

function display_array() {
    let e = "<hr />";

    for (let y = 0; y < array.length; y++) {
        e += "Element " + y + " = " + array[y] + "<br />";
    }
    document.getElementById("Result").innerHTML = e;
}
/** *********************************** */

// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
function removeDuplicates(num) {
    let out = [],
        obj = {};

    for (let x = 0; x < num.length; x++) {
        obj[num[x]] = 0;
    }
    for (x in obj) {
        out.push(x);
    }
    return out;
}
let Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
let result2 = removeDuplicates(Mynum);
console.log(Mynum);
console.log(result2);
/** *********************************** */

// 15. We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
// Note : Use ordinal numbers to tell their position.
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
function Ordinal(n) {
    let o = ["th","st","nd","rd"],
        x = n % 100;
    return x + (o[(x - 20) % 10] || o[0]);
}

for (n = 0; n < color.length; n++) {
    let ordinal = n + 1;
    let output = (Ordinal(ordinal) + " choise is " + color[n] + ".");
    console.log(output);
}
/** *********************************** */

// 16. Find the leap years in a given range of years.
function leap_year_range(st_year, end_year) {
    const year_range = [];
    for (let i = st_year; i <= end_year; i++) {
        year_range.push(i);
    }
    const new_array = [];

    year_range.forEach(
        year => {
            if (test_LeapYear(year)) {
                new_array.push(year);
            }
        }
    );
    return new_array;
}

function test_LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return year;
    } else {
        return false;
    }
}
console.log(leap_year_range(2000, 2012));
/** *********************************** */

// 17. Write a JavaScript program to shuffle an array.
function shuffle(arra1) {
    let ctr = arra1.length, temp, index;
    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));
/** *********************************** */

// 18. Write a JavaScript program to perform a binary search.

// Note : A binary search or half-interval search algorithm finds 
// the position of a specified input value within an array sorted by key value.
// Sample array :
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output :
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4
function binary_Search(items, value) {
    let firstIndex = 0,
        lastIndex = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    while (items[middleIndex] != value && firstIndex < lastIndex) {
        if (value < items[middleIndex]) {
            lastIndex = middleIndex - 1;
        } else if (value > items[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }
    return (items[middleIndex] != value) ? -1 : middleIndex;
}
let items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));
console.log(binary_Search(items, 5));
/** *********************************** */

// 19. There are two arrays with individual values, 
// write a JavaScript program to compute the sum of each individual index value from the given arrays.

// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

function Arrays_sum(array1, array2) {
    let result = [];
    let ctr = 0;
    let x = 0;

    if (array1.length === 0) {
        return "array1 is empty";
    }
    if (array2.length === 0) {
        return "array2 is empty";
    }

    while (ctr < array1.length && ctr < array2.length) {
        result.push(array1[ctr] + array2[ctr]);
        ctr++;
    }

    if (ctr === array1.length) {
        for (x = ctr; x < array2.length; x++) {
            result.push(array2[x]);
        }
    } else {
        for (x = ctr; x < array1.length; x++) {
            result.push(array1[x]);
        }
    }
    return result;
}
console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));
/** *********************************** */

// 20. Write a JavaScript program to find duplicate values in a JavaScript array.
function find_duplicate_in_array(arra1) {
    let object = {};
    let result = [];

    arra1.forEach(function (item) {
        if (!object[item])
            object[item] = 0;
            object[item] += 1;
    });

    for (let prop in object) {
        if (object[prop] >= 2) {
            result.push(prop);
        }
    }
    return result;
}
console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));
/** *********************************** */