//Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console.
//For input 1, output should be “Monday”.


//Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
//For input 1, output should be “Monday”.
//For input 10, output should be “Input must be a number between 1 and 7”./

/*
Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
		For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.
*/



/*
var placeInWeek = 5;
var day = "";
var dayInWeek = "";

switch (placeInWeek) {
    case 1:
        day = "Monday";
        dayInWeek = "It’s weekday";
        break;
    case 2:
        day = "Tuesday";
        dayInWeek = "It’s weekday";
        break;
    case 3:
        day = "Wendsday";
        dayInWeek = "It’s weekday";
        break;
    case 4:
        day = "Thursday";
        dayInWeek = "It’s weekday";
        break;
    case 5:
        day = "Friday";
        dayInWeek = "It’s weekday";
        break;
    case 6:
        day = "Saturday";
        dayInWeek = "It’s weekend";
        break;
    case 7:
        day = "Sunday";
        dayInWeek = "It’s weekend";
        break;
    default:
        day = "Input must be a number between 1 and 7";
        break;

}
console.log(day)
console.log(dayInWeek)*/

/*Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12. 
		For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.
*/
/*Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12. 
*/



var placeInYear = "7.";
var motnh = "";
var yearSeason = "";

switch (placeInYear) {
    case "1.":
        month = "January";
        yearSeason = "Winter";
        break;
    case "2.":
        month = "February";
        yearSeason = "Winter";
        break;
    case "3.":
        month = "March";
        yearSeason = "Winter";
        break;
    case "4.":
        month = "April";
        yearSeason = "Spring";
        break;
    case "5.":
        month = "May";
        yearSeason = "Spring";
        break;
    case "6.":
        month = "June";
        yearSeason = "Summer";
        break;
    case "7.":
        month = "July";
        yearSeason = "Summer";
        break;
    case "8.":
        month = "August";
        yearSeason = "Summer";
        break;
    case "9.":
        month = "September";
        yearSeason = "Summer";
        break;
    case "10.":
        month = "October";
        yearSeason = "Autumn";
        break;
    case "11.":
        month = "November";
        yearSeason = "Autumn";
        break;
    case "12.":
        month = "December";
        yearSeason = "Winter";
        break;
    default:
        motnh = "Input must be a number between 1. and 12.";
        break;

}
console.log(month)
console.log(yearSeason)


/*Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that grade in the following manner: A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed". Input different from letters A-F outputs a message "Unknown grade".
*/

var grade = "B";
var description = "";

switch (grade) {
    case "A":
        description = "Good job";
        break;
    case "B":
        description = "Pretty good";
        break;
    case "C":
        description = "Passed";
        break;
    case "D":
        description = "Not so good";
        break;
    case "F":
        description = "Failed";
        break;
    default:
        description = "Unknown grade";
        break;
}
console.log(description)

/*Write a program that takes as input a city name and outputs the country where the city is. You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. Input different from the listed cities should output a message"Please choose a different city".
*/


var cityName = "Arad";
var country = "";

switch (cityName) {
    case "Belgrade":
    case "Uzice":
        country = "Serbia";
        break;
    case "Bar":
    case "Podgorica":
        country = "Montenegro";
        break;
    case "Budapest":
    case "Mohach":
        country = "Hungary";
        break;
    case "Arad":
    case "Bukurest":
        country = "Romania";
        break;
    default:
        country = "Please chose a different city";
        break;
}
console.log(country)



/*Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!
*/

var first = 5;
var second = 0;
var operator = "/";
var result = "";

switch (operator) {
    case "+":
        result = (first + second);
        break;
    case "-":
        result = (first - second);
        break;
    case "*":
        result = (first * second);
        break;
    case "/":
        if (second === 0)
            console.log("Second number cannot be zero!  Pslease write another number.")
        else
            result = (first / second);
        break;
}



console.log(result)





