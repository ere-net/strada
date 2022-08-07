// https://learn.javascript.ru/operators
// https://learn.javascript.ru/task/increment-order

let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

console.log(a); // 2
console.log(b); // 2
console.log(c); // 2
console.log(d); // 1


// https://learn.javascript.ru/task/assignment-result

let a = 2;

let x = 1 + (a *= 2);

console.log(a); // 4
console.log(x); // 5


// https://learn.javascript.ru/task/primitive-conversions-questions

console.log("" + 1 + 0);    // "1" + 0 = 10
console.log("" - 1 + 0);    // 0 - 1 + 0 = -1
console.log(true + false);  // 1 + 0 = 1
console.log(6 / "3");       // 6 / 3 = 2
console.log("2" * "3");     // 2 * 3 = 6
console.log(4 + 5 + "px");  // 9px
console.log("$" + 4 + 5);   // $45
console.log("4" - 2);       // 4 - 2 = 2
console.log("4px" - 2);     // NaN
console.log("  -9  " + 5);  // "  -9  5"
console.log("  -9  " - 5);  // -9 - 5 = -14
console.log(null + 1);      // 0 + 1 = 1
console.log(undefined + 1); // NaN + 1 = NaN
console.log(" \t \n" - 2);  //-2


// https://learn.javascript.ru/task/fix-prompt

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); // 12
alert(+a + +b); // 3


// Strada
// напишите программу с разными математическими операторами и разными типами данных.
// Например сложите строки, строку с числом, число с булевым значением и так далее

console.log("Alena " + "Eremetova"); // Alena Eremetova
console.log("Age " + 35); // Age 35
console.log(35 + true); // 36
console.log(35 - true); // 34
console.log("Age " + true); // Age true