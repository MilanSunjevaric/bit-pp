//Zadatak 1
/*Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
*/

for (i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log("Number is even!")
    }
    else {
        console.log("Number is odd!")
    }
}

//Zadatak 2
/*Write a program to sum the multiples of 3 and 5 under 1000.
*/

var sum = 0;

for (multi = 0; multi < 1000; multi++) {
    if (multi % 3 === 0 || multi % 5 === 0) {
        sum += multi;
    }
}
console.log(sum);

/*Zadatak 3.
Write a program to compute the sum and product of an array of integers.*/
sum = 0;
prod = 1;
array = [4, 7, 43, 6, 12, 57];
for (i = 0; i < array.length; i++) {

    console.log(array[i]);
    sum += array[i];
    prod *= array[i];
}
console.log(sum);
console.log(prod);

/*Zadatak 4.
Write a program which prints the elements of the following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
*/


var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
sum = "";

for (i = 0; i < x.length; i++) {
    sum = sum + " " + x[i]
}

console.log(sum);

// Zadatak 5. Write a program that prints the elements of the following array.

var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];

for (var z = 0; z < a.length; z++); {
    console.log(a[z]);
}









