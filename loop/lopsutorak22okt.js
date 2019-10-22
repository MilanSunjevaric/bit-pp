//brisanje clanova niza 

var e = 5;
var a = [3, 5, 7];
for (i = 0; i < a.length; i++) {
    if (a[i] === e) {
        delete a[i]
    }
}
console.log(a)

//zadatak 9

var e = 2;
var a = [4, 6, 2, 8, 2, 2];
var b = []
for (i = 0; i < a.length; i++) {
    if (a[i] !== e) {
        b[b.length] = a[i]
    }
}
console.log(b)

//zadatak 10
var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];
var b = [];

for (i = 0; i <= a.length; i++) {
    if (p > a.length) {
        b = "Error, value of position is grater than array length";
        break;
    }
    if (i < p) {
        b[b.length] = a[i];
    }
    else if (i === p) {
        b[b.length] = e;
    }
    else {
        b[b.length] = a[i - 1];
    }
}
console.log(b);



var value = 78;
var index = 3;
var initial = [2, -2, 33, 12, 5, 8];
var extended = [];


for (i = 0; i < initial.length; i++) {
    if (i === index) {
        extended[extended.length] = value;
    }
    extended[extended.length] = inital[i];


}

console.log(extended);




/////////


var size = 5;
var shape = "";

for (var row = 0; row < size; row++) {
    for (var column = 0; column < size; column++) {
        shape += ' * ';
    }
    shape += '\n';
}
console.log(shape);


//

var size = 5;
var row = "";
var result = "";

for (var i = 0; i < size; i++) {
    row += "*";
    result += row;



}
console.log(row);

