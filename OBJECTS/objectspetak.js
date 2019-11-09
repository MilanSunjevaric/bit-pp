/* "use strict"

// var student = {
//     name: 'Pera',
//     age: 21,
//     gender: 'Male'
// };

// console.log(student);

// var ageless = {
//     title: 'Thanatos',
//     print: function (a) {
//         return 510 + a;
//     }
// }
// console.log(ageless.print(1))



// var ageless = {
//     world: 'Earth',
//     title: 'Thanatos',
//     getFormattedComment: function () {
//         return ageless.world + " " + ageless.title;
//     }
// }

// console.log(ageless.getFormattedComment())


// var comment = {
//     world: 'Earth',
//     title: 'Thanatos',
//     getFormattedComment: function () {
//         return this.world + " " + this.getFormattedComment;
//     }
// }

// console.log(comment.getFormattedComment())


// window.console.log(false)

// window.navigator




// 1.
// var coffeeTop = {
//     name: 'Sumatra',
//     strength: 'Dark',
//     flavour: 'Strong',
//     milk: 'none'

// }
// console.log(coffeeTop);


// 2.
// var favMovie = {
//     title: 'Matrix',
//     actors: 'Keeanu Reeves', 'Lawrence Fishbourne',
//     director: 'Wachovski brothers',
//     genre: 'Action',
//     popularity: 'extreme'

// }

// 3. 
// REGULARNA FUNKCIJA
// function createobject(description, programmingLanguage, gitRepository, booleanStatus) {
//     return {
//         description: description,
//         programmingLanguage: programmingLanguage,
//         gitRepository: gitRepository,
//         booleanStatus: booleanStatus,
//         printRepository: function () {
//             console.log(this.git_repository);
//         },
//         isJavaScript: function () {
//             if (this.programmingLanguage === "JavaScript") {
//                 return "program is in Javascript";
//             }
//             else {
//                 return "program is not Javascript";
//             }
//         },
//         completeStatus: function () {
//             if (booleanStatus === true) {
//                 return "Program is completed";
//             }
//             else {
//                 return "Program is not completed";
//             };
//         }
//     }
// }
// var result = createobject('Program1', 'JavaScript', 'bit-web', false);
// console.log(result.completeStatus());


//KONSTRUKTORSKA FUNKCIJA
// function createobject(description, programmingLanguage, gitRepository, booleanStatus) {

//     this.description = description;
//     this.programmingLanguage = programmingLanguage;
//     this.gitRepository = gitRepository;
//     this.booleanStatus = booleanStatus;
//     this.printRepository = function () {
//         console.log(this.git_repository);
//     },
//         this.isJavaScript = function () {
//             if (this.programmingLanguage === "JavaScript") {
//                 return "program is in Javascript";
//             }
//             else {
//                 return "program is not Javascript";
//             }
//         };
//     this.completeStatus = function () {
//         if (booleanStatus === true) {
//             return "Program is completed";
//         }
//         else {
//             return "Program is not completed";
//         }
//     }

// }
// var result = new createobject('Program1', 'Angular', 'bit-web', false);
// console.log(result.isJavaScript());




// //4.
// KONSTRUKTORSKA FUNKCIJA
// function CreateRecipe(name, typeofCuisine, complexity, ingredients, preparingTime, instructions) {

//     this.name = name;
//         this.typeofCuisine = typeofCuisine;
//         this.complexity = complexity;
//         this.ingredients = ingredients;
//         this.preparingTime = preparingTime;
//         this.instructions = instructions;
//         this.meal = function () {
//             return this.ingredients;
//         };
//         this.timeLimit = function () {
//             if (this.preparingTime <= 15) {
//                 return "meal can be prepared in 15mins"
//             }
//             else {
//                 return "meal cannot be prepared in 15mins"
//             }
//         };
//         this.cuisineChange = function (a) {
//             return this.typeofCuisine = a;
//         },
//         this.deleteIngredient = function (b) {
//             return delete this.ingredients[b];
//         }




// }

// var result = new CreateRecipe("Pizza", "italian", "easy", ["cheese", "ham", "sauce"], 19, "Just don't get burned");

// result.cuisineChange("kineska");
// result.deleteIngredient(1);
// console.log(result.meal());







// REGULARNA FUNKCIJA
// function Createobject(description, programmingLanguage, gitRepository, booleanStatus) {
//     return {
//         description: description,
//         programmingLanguage: programmingLanguage,
//         gitRepository: gitRepository,
//         booleanStatus: booleanStatus,
//         printRepository: function () {
//             console.log(this.git_repository);
//         },
//         isJavaScript: function () {
//             if (this.programmingLanguage === "JavaScript") {
//                 return "program is in Javascript";
//             }
//             else {
//                 return "program is not Javascript";
//             }
//         },
//         completeStatus: function () {
//             if (booleanStatus === true) {
//                 return "Program is completed";
//             }
//             else {
//                 return "Program is not completed";
//             };
//         }
//     }
// }
// var result = Createobject('Program1', 'JavaScript', 'bit-web', false);
// console.log(result.completeStatus());

//BUILT IN OBJECTS 1

//1. Zadatak Write a functional expression that duplicates each element of a given array.

Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

function duplicate(array1) {
    for (var i = 0; i < array1.length; i += 2) {
        array1.splice(i, 1, array1[i], array1[i]);
    }
    return array1;

}
console.log(duplicate([2, 4, 7, 11, -2, 1]));


//2. Zadatak Write a functional expression that removes all duplicates in a given array.

// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

function remove(array2) {

    array2.sort(function(a, b) {

        return a - b;

    });
    for (i = 0; i < array2.length; i++) {
        if (array2[i] === array2[i + 1] || array2[i] === array2[i - 1]) {
            array2.splice(i, 1);
        }

    }
    return array2;
}
console.log(remove([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));



// 3. Zadatak  Write a function that checks if a given array has odd number of elements.
/* Input: [1, 2, 9, 2, 1]
Output: true

Write a function that counts the number of elements less than the middle element. 
If the given array has an even number of elements, print out an error message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
 */

// function oddChecker() {
//     var arrayInput = [1, 2, 9, 2];

//     if (arrayInput.length % 2 !== 0) {
//         return "true";

//     }
//     else {
//         return "false";
//     }

// } console.log(oddChecker());

/* function middleCounter(arrayInput) {
    var counter = 0;
    if (arrayInput.length % 2 === 0) {
        return 'error';
    }
    var middleElmntIndex = Math.floor(arrayInput.length / 2);
    for (var i = 0; i < arrayInput.length; i++) {
        if (arrayInput[middleElmntIndex] > arrayInput[i]) {
            counter++;
        }
    }
    return counter;
}
console.log(middleCounter([-1, 8.1, 3, 6, 2.3, 44, 2.11])); */



/* Zadatak 4. 

Write a function that finds the smallest element of a given array. 
The function should return an object that contains the smallest value 
and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 } 
*/

'use strict'

function finder(array) {

    var forSort = array.slice();
    var sorted = forSort.sort(function(a, b) {
        return a - b;
    });
    var minind = sorted[0];
    var minLastIndex = array.lastIndexOf(minind);
    return minLastIndex;
}

/* function xyz(finder()) {
    this.minValue = minind;
    this.minLastIndex = minLastIndex;
}

console.log(xyz());; */
console.log(finder([1, 4, -2, 11, 8, 1, -2, 3]));


/* Zadatak 5. 
 */


/* A  
 Write a function that finds all the elements in a given array 
less than a given element. 
	Input: [2, 3, 8, -2, 11, 4], 6 
	Output: [2, 3, -2, 4]*/
'use strict'

function finderFirst(array, n) {

    var noviniz = [];
    for (var i = 0; i < array.length; i++) {
        if (n > array[i]) {
            noviniz[noviniz.length] = array[i];
        }
    }
    return noviniz;
}
console.log(finderFirst([2, 3, 8, -2, 11, 4], 6));



/* B 
Write a function that finds all the elements in a given array 
that start with the “pro” substring. The function should be case insensitive. 
		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
    Output: [’Proggramming’, ‘product’]*/


function findElement(array) {

    var outputArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === 'P' || array[i].charAt(0) === 'p' && array[i].charAt(1) === 'r' && array[i].charAt(2) === 'o') {
            outputArray[outputArray.length] = array[i];
        }
    }
    return outputArray;
}
console.log(findElement(['JavaScript', 'Programming', 'fun', 'product']));






/* C 
    Write a function that expects an array and a callback function that 
filters out some of the elements. Use functions defined in a) or b) to test it. 
 */




/* Zadatak 6.
 A
 Write a list (array) of products you usually buy in the supermarket.
  Write a price and name for each product. For example,
	[
{name: ‘apples’, price: 100}, 
{name: ‘milk’, price: 80}, 
{name:’bananas’, price: 150}
]

/* Zadatak 6. 
B
Write a function that calculates the total price of your shopping list. 

C
Write a function that calculates the average product price of your shopping list. 
Print this value with the precision of three decimals. 

D
Write a function that prints out the name of the most expensive product on your 
shopping list. Write the name in uppercase. 
 */




var array = [
    { name: 'apples', price: 100 },
    { name: 'milk', price: 80 },
    { name: 'bananas', price: 150 }
]

function calculator(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i].price;
    }
    return 'Ukupna cena proizvoda = ' + sum;
}
console.log(calculator(array));

function averagePrice(ccc) {
    var avgPriceOfProduct = ccc / array.length;
    return avgPriceOfProduct;
}
console.log(averagePrice(calculator()));




var array = [
    { name: 'apples', price: 100 },
    { name: 'milk', price: 80 },
    { name: 'bananas', price: 150 }
]

function maxprice(array) {

    var mostExpensive = Math.max.apply(Math, array.map(function(o) { return o.price; }));

    return mostExpensive;
}
console.log(maxprice(array));


/* Zadatak 6. */