/* Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
 */

for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + "odd");
    }
    if (i % 2 !== 0) {
        console.log(i + 'even');
    }
}

/* Write a program to sum the multiples of 3 and 5 under 1000. */

var a = 0;
for (i = 0; i <= 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
        a += i;
    }
}
console.log(a);


/* 
Write a program to compute the sum and product of an array of integers. */

var a = [4, 7, 43, 6, 12, 57];

var sum = 0;
var prod = 1;

for (var i = 0; i < a.length; i++) {
    sum = sum + a[i];
    prod = prod * a[i];
}
console.log(sum);
console.log(prod);

/* Write a program which prints the elements of the following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
 */

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var noviniz = '';

for (var i = 0; i < x.length; i++) {
    noviniz = noviniz + " " + x[i];

}
console.log(noviniz);

/* Write a program that prints the elements of the following array.

var a = [
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27]
];

 */

var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
var newarr = '';



for (i = 0; i < a.length; i++) {
    newarr = newarr + "  " + (a[i]);

}
console.log(newarr);


/*  Write a program that outputs the sum of squares of the first 20 numbers. 
 */

var sum = 0;

for (var i = 0; i <= 20; i++) {
    sum = sum + (i * i);
}
console.log(sum);


/* Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
 */


var e = 6;
var a = [5, -4.2, 3, 7];
var output = 'No';

for (i = 0; i < a.length; i++) {
    if (a[i] === e) {
        var output = "Yes";
    }
}
console.log(output);

/* Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
 */

var a = [-3, 11, 5, 3.4, -8];
var i = 0;

for (i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        a[i] = a[i] * 2;
    }

}
console.log(a);


/* Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
 */

var a = [4, 2, 2, -1, 6];
min = [0];
index = 0;

for (var i = 0; i < a.length; i++) {
    if (a[i] < min) {
        min = a[i];
        index = i;
    }
}
console.log(min + " index:" + index);


/* Write a program that finds the first element larger than minimum and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
 */