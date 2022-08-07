// https://learn.javascript.ru/variables
// https://learn.javascript.ru/task/hello-variables

let admin;
let name;

name = "Джон";
admin = name;
alert(admin);

// https://learn.javascript.ru/task/declare-variables

let ourPlanetName = "Земля";
let currentUserName;

// https://learn.javascript.ru/task/uppercast-constant

const BIRTHDAY = '18.04.1982'; // не изменяется и заранее известна, поэтому заглавными
const age = someCode(BIRTHDAY); // вычисляется, поэтому строчными

// https://learn.javascript.ru/types
// https://learn.javascript.ru/task/string-quotes

let name = "Ilya";

console.log( `hello ${1}` ); // hello 1
console.log( `hello ${"name"}` ); // hello name
console.log( `hello ${name}` ); // hello Ilya

// Strada Day 5

let myName = "Alena";
let myAge = 35;
let isSingle = false;

console.log(typeof(myName));
console.log(typeof(myAge));
console.log(typeof(isSingle));