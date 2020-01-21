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

// 21. Write a JavaScript program to flatten a nested (any depth) array. 
// If you pass shallow, the array will only be flattened a single level.

// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]
function flatten(a, shallow, r) {
    if (!r) {
        r = [];
    }
    if (shallow) {
        return r.concat.apply(r, a);
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i].constructor == Array) {
            flatten(a[i], shallow, r);
        } else {
            r.push(a[i]);
        }
    }
    return r;
}
console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));
console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true));
/** *********************************** */

// 22. Write a JavaScript program to compute the union of two arrays.

// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]
function union(arra1, arra2) {
    if ((arra1 == null) || (arra2 == null)) {
        return void 0;
    }
    let obj = {};
    for (let i = arra1.length - 1; i >= 0; --i) {
        obj[arra1[i]] = arra1[i];
    }
    for (let i = arra2.length - 1; i >= 0; --i) {
        obj[arra2[i]] = arra2[i];
    }
    let res = [];
    for (let n in obj) {
        if (obj.hasOwnProperty(n)) {
            res.push(obj[n]);
        }
    }
    return res;
}
console.log(union([1, 2, 3], [100, 2, 1, 10]));
/** *********************************** */

// 23. Write a JavaScript function to find the difference of two arrays.

// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
function differenceOf2Arrays(array1, array2) {
    let temp = [];
    array1 = array1.toString().split(',').map(Number);
    array2 = array2.toString().split(',').map(Number);

    for (let i in array1) {
        if (array2.indexOf(array1[i]) === -1) {
            temp.push(array1[i]);
        }
    }
    for (let i in array2) {
        if (array1.indexOf(array2[i]) === -1) {
            temp.push(array2[i]);
        }
    }
    return temp.sort((a, b) => a - b);
}
console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
/** *********************************** */

// 24. Write a JavaScript function to remove. 
// 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
function filter_array(test_array) {
    let index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        let value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }
    return result;
}
console.log(filter_array([NaN, 0, 15, false, -22, '',undefined, 47, null]));
/** *********************************** */

// 25. Write a JavaScript function to sort the following array of objects by title value.

// Sample object :

// var library = [ 
//    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//    ];
// Expected result :

// [[object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title:"Mockingjay:The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "Bill Gates",
//   libraryID: 1254,
//   title: "The Road Ahead"
// }, [object Object] {
//   author: "Steve Jobs",
//   libraryID: 4264,
//   title: "Walter Isaacson"
// }]
var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
function compare_to_sort(x, y) {
    if (x.title < y.title) {
        return -1;
    }
    if (x.title > y.title) {
        return 1;
    }
    return 0;
}
console.log(library.sort(compare_to_sort));
/** *********************************** */

// 26. Write a JavaScript program to find a pair of elements (indices of the two numbers)
// from an given array whose sum equals a specific target number.

// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3
function twoSum(nums, target_num) {
    let map = [];
    let indexnum = [];
    for (let x = 0; x < nums.length; x++) {
        if (map[nums[x]] != null) {
            let index = map[nums[x]];
            indexnum[0] = index;
            indexnum[1] = x;
            break;
        } else {
            map[target_num - nums[x]] = x;
        }
    }
    return indexnum;
}
console.log(twoSum([10,20,10,40,50,60,70], 50));
/** *********************************** */

// 27. Write a JavaScript function to retrieve the value 
// of a given property from all elements in an array.

// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
let library1 = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

function property_value(array, property_key) {
    let arr = [],
        index = -1,
        arrlen = array.length, array_items;

    while (++index < arrlen) {
        array_items = array[index];

        if (array_items.hasOwnProperty(property_key)) {
            arr[arr.length] = array_items[property_key];
        }
    }
    return arr;
}
console.log(property_value(library, 'title'));
console.log(property_value(library, 'author'));
/** *********************************** */

// 28. Write a JavaScript function to find 
// the longest common starting substring in a set of strings.

// Sample array : console.log(longest_common_starting_substring(['go', 'google']));
// Expected result : "go"
function longest_common_starting_substring(arr1) {
    let arr = arr1.concat().sort(),
        a1 = arr[0],
        a2 = arr[arr.length - 1],
        L = a1.length,
        i = 0;

    while (i < L && a1.charAt(i) === a2.charAt(i))
        i++;
        return a1.substring(0, i);
}
console.log(longest_common_starting_substring(['go', 'google']));
console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial']));
console.log(longest_common_starting_substring(['abcd', '1234'])); 
/** *********************************** */

// 29. Write a JavaScript function to fill an array with values 
// (numeric, string with one character) on supplied bounds.

// Test Data :
// console.log(num_string_range('a', "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
function num_string_range(start, end, step) {
    let range = [];
    if ((step === 0) || (typeof start == "undefined" || typeof end == "undefined") || (typeof start != typeof end)) {
        return false;
    }
    if (end < start) {
        step = -step;
    }
    if (typeof start == "number") {
        while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
        }
    } else if (typeof start == "string") {
        if (start.length != 1 || end.length != 1) {
            throw TypeError("Strings with one character are supported.");
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
        }
    } else {
        throw TypeError("Only string and number are supported");
    }
    return range;
}
console.log(num_string_range('a', "z", 2));
console.log(num_string_range("Z", "A", 2));
console.log(num_string_range(0, -5, 1));
console.log(num_string_range(0, 25, 5));
console.log(num_string_range(20, 5, 5));
/** *********************************** */

// 30. Write a JavaScript function to merge two arrays and removes all duplicates elements.

// Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]
function merge_array(array1, array2) {
    let result_array = [];
    let arr = array1.concat(array2);
    let len = arr.length;
    let assoc = {};

    while (len--) {
        let item = arr[len];

        if (!assoc[item]) { 
            result_array.unshift(item);
            assoc[item] = true;
        }
    }
    return result_array;
}

let arrayy1 = [1, 2, 3];
let arrayy2 = [2, 30, 1];
console.log(merge_array(arrayy1, arrayy2));
/** *********************************** */

// 31. Write a JavaScript function to remove a specific element from an array. 

// Test data :
// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]
function remove_array_element(array, n) {
    let index = array.indexOf(n);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}
console.log(remove_array_element([2, 5, 9, 6], 5));
/** *********************************** */

// 32. Write a JavaScript function to find an array contains a specific element.

// Test data :
// arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// [True]
function contains(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
/** *********************************** */

// 33. Write a JavaScript script to empty an array keeping the original.
let arr3 = [1, 3, 6, 3, -5];
console.log(arr3);
arr3.length = 0;
console.log(arr3);
/** *********************************** */

// 34. Write a JavaScript function to get nth largest element from an unsorted array.

// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89
function nthlargest(arra, highest) {
    let x = 0,
        y = 0,
        z = 0,
        temp = 0,
        flag = false,
        result = false;
    
    while (x < arra.length) {
        y = x + 1;

        if (y < arra.length) {
            for (z = y; z < arra.length; z++) {

                if (arra[x] < arra[z]) {
                    temp = arra[z];
                    arra[z] = arra[x];
                    arra[x] = temp;
                    flag = true;
                } else {
                    continue;
                }
            }
        }

        if (flag) {
            flag = false;
        } else {
            x++;
            if (x === highest) {
                result = true;
            }
        }
        if (result) {
            break;
        }
    }
    return (arra[(highest - 1)]);
}
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
/** *********************************** */

// 35. Write a JavaScript function to get a random item from an array.
function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}
let items1 = [254, 45, 212, 365, 2543];
console.log(random_item(items1));
/** *********************************** */

// 36. Write a JavaScript function to create a specified number of elements with pre-filled numeric value array.
// Test Data :
// console.log(array_filled(6, 0));
// [0, 0, 0, 0, 0, 0]
// console.log(array_filled(4, 11));
// [11, 11, 11, 11]
function array_filled(n, val) {
    return Array.apply(null, Array(n)).map(Number.prototype.valueOf, val);
}
console.log(array_filled(6, 0));
console.log(array_filled(4, 11));
/** *********************************** */

// 37. Write a JavaScript function to create a specified number of elements with pre-filled string value array.

// Test Data :
// console.log(array_filled(3, 'default value'));
// ["default value", "default value", "default value"]
// console.log(array_filled(4, 'password'));
// ["password", "password", "password", "password"]
function array_filled1(n, val) {
    return Array.apply(null, Array(n))
                .map(String.prototype.valueOf, val);
}
console.log(array_filled1(3, 'default value'));
console.log(array_filled1(4, 'password'));
/** *********************************** */

// 38. Write a JavaScript function to move an array element from one position to another.

// Test Data :
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]
// console.log(move([10, 20, 30, 40, 50], -1, -2));
// [10, 20, 30, 50, 40]
function move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index = old_index + arr.length;
    }
    while (new_index < 0) {
        new_index = new_index + arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
}
console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));
/** *********************************** */

// 39. Write a JavaScript function to filter false, null, 0 and blank values from an array.

// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]
function filter_array_values(arr) {
    arr = arr.filter(isEligible);
    return arr;
}

function isEligible(value) {
    if (value !== false || value !== null || value !== 0 || value !== '') {
        return value;
    }
}
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
/** *********************************** */

// 40. Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.

// Test Data :
// console.log(array_range(1, 4));
// [1, 2, 3, 4]
// console.log(array_range(-6, 4));
// [-6, -5, -4, -3]
function array_range(start, len) {
    let arr = new Array(len);
    for (let i = 0; i < len; i++, start++) {
        arr[i] = start;
    }
    return arr;
}
console.log(array_range(1, 4));
console.log(array_range(-6, 4));
/** *********************************** */

// 41. Write a JavaScript function to generate an array between two integers of 1 step length.

// Test Data :
// console.log(rangeBetwee(4, 7));
// [4, 5, 6, 7]
// console.log(rangeBetwee(-4, 7));
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
function rangeBetwee(start, end) {
    if (start > end) {
        let arr = new Array(start - end + 1);

        for (let i = 0; i < arr.length; i++, start--) {
            resarrult[i] = start;
        }
        return arr;
    } else {
        let arro = new Array(end - start + 1);

        for (let j = 0; j < arro.length; j++, start++) {
            arro[j] = start;
        }
        return arro;
    } 
}
console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));
/** *********************************** */

// 42. Write a JavaScript function to find the unique elements from two arrays.

// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["1", "2", "3", "4", "5", "6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]

function difference(arr1,arr2) {
  
    var a1= flatten(arr1,true);
    var a2= flatten(arr2,true);
    
    var a=[], diff=[];
    for(var i=0;i< a1.length;i++)
      a[a1[i]]=false;
    for(i=0;i< a2.length;i++)
    if(a[a2[i]]===true) 
       { delete a[a2[i]];}
      else a[a2[i]]=true;
    for(var k in a)
      diff.push(k);
    return diff;   
}

var flatten = function(a, shallow, r) {
    if (!r) {
        r = [];
    }
    if (shallow) {
        return r.concat.apply(r, a);
    }
    for (i = 0; i < a.length; i++) {
        if (a[i].constructor == Array) {
            flatten(a[i], shallow, r);
        } else {
            r.push(a[i]);
        }
    }
    return r;
};
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
/** *********************************** */

/** *********************************** */
let people = [
    {name: "Neti", age: 32, hasJob: true, gender: "female"},
    {name: "Pavlo", age: 34, hasJob: true, gender: "male"},
    {name: "Mike", age: 25, hasJob: false, gender: "male"},
    {name: "Ann", age: 35, hasJob: true, gender: "female"},
    {name: "Jou", age: 40, hasJob: false, gender: "male"}
];
console.log(people);

let arrPeop = people.filter(person => person.gender === "male")
                    .map(person => person.age);
console.log(arrPeop);

let sum = arrPeop.reduce(function(acc, cur) {
    return acc + cur;
    // acc +=cur;
    // return acc;
}, 0);
console.log(sum);

let avarage = sum / arrPeop.length;
console.log(avarage);