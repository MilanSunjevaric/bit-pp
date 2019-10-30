/* Zadatak 1. 
Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 
 */

"use strict"
function countVowels(str) {
    var res = 0;
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
                res++;
        }
    } return res;

} console.log(countVowels("WEd"));

/* Zadatak 2. 
Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
 */

'use strict'
function combine(first, second) {

    var res = [];


    for (var i = 0; i < first.length; i++) {

        res[res.length] = first[i];
        res[res.length] = second[i];
    }

    return res;
}
console.log(combine(['a', 'b', 'c'], [1, 2, 3]));


/* Zadatak 3. Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
 */



'use strict'

function rotate(array, k) {

    var b = [];

    for (var i = 0; i < array.length; i++) {
        b[(i + k) % array.length] = array[i];

    }
    return b;
}

console.log(rotate([1, 2, 3, 4, 5, 6], 3));


/* Zadatak 4. Write a function that takes a number and returns array of its digits.
 */


'use strict'

function vrati(number) {

    var array = [];
    var string = '';
    var newstring = number + string;

    for (var i = 0; i < newstring.length; i++) {



    }
}

return array;
}
console.log(vrati(12321));