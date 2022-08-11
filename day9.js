// https://learn.javascript.ru/comparison
// https://learn.javascript.ru/task/comparison-questions

console.log(5 > 4);                 // true
console.log("ананас" > "яблоко");   // false
console.log("2" > "12");            // true
console.log(undefined == null);     // true
console.log(undefined === null);    // false
console.log(null == "\n0\n");       // false
console.log(null === +"\n0\n");     // false

// chat

console.log(undefined/0);              // NaN
console.log(undefined/0 == 0);         // false
console.log(undefined/0 === NaN);      // false
console.log(null < 3 == "татьяна" > "Татьянище");  // true

console.log('1)', 4 > 5);                 // false
console.log('2)', 'Inna' <= 'Maria');     // true
console.log('3)', 5 >= '5');              // true
console.log('4)', undefined > 0);         // false
console.log('5)', undefined == null);     // true
console.log('6)', undefined >= '0');      // false
console.log('7)', undefined >= null);     // false
console.log('8)', 0 <= null);             // true
console.log('9)', null == 0);             // false
console.log('10)', null >= '');           // true
console.log('11)', null <= '0');          // true
console.log('12)', '' <= '0');            // true
console.log('13)', 'Cat' <= '0');         // false
console.log('14)', undefined === null);   // false
console.log('15)', null === 'null');      // false

console.log('1)', null == undefined);       // true
console.log('2)', 'Nadia' <= 'Ludmila');    // false
console.log('3)', true >= '1');             // true
console.log('4)', "15" < "5");              // true
console.log('5)', "b" < 5);                 // false
console.log('6)', '' >= undefined);         // false
console.log('7)', undefined >= null);       // false
console.log('8)', NaN != "0");              // true
console.log('9)', " " == false);            // true?
console.log('10)', null == 0);              // false
console.log('11)', undefined == 0);         // false
console.log('12)', "" !== false);           // true
console.log('13)', undefined !== 0);        // true
console.log('14)', false === 0);            // false
console.log('15)', "" ==  0);               // true

console.log(-5 >= -3);                          // false
console.log("solid" > "soft");                  // true
console.log("34" <= 3);                         // false
console.log("9" > "3");                         // true
console.log(undefined == null);                 // true
console.log(undefined === null);                // false
console.log(Boolean(NaN) < Boolean(undefined)); // false
console.log(undefined === "undefined");         // false
console.log((34 + "2" - Boolean(undefined) == null) === undefined);   // false
console.log((34 + "2") == 342);                 // true

console.log("hello">"привет");    // false
console.log("Привет">"привет");   // false
console.log("32"==32);            // true
console.log("32"<"4");            // true
console.log(+"32"<"4");           // false
console.log(null==0);             // false
console.log(undefined>=0);        // false
console.log(0!==false);           // true
console.log(0==false);            // true

console.log(5 > 4);               // true
console.log("ананас" > "яблоко"); // false
console.log("2" > "12");          // true
console.log(undefined == null);   // true
console.log(undefined=== null);   // false
console.log(null == "\n0\n");     // false
console.log(null === +"\n0\n");   // false
console.log(null === undefined);  // false
console.log(NaN === NaN);         // false
console.log(NaN !== NaN);         // true
console.log(false === 0);         // false
console.log(true === 1);          // false
console.log("1" === true);        // false
console.log("" !== false);        // true
console.log(undefined !== 0);     // true
console.log(null === 0);          // false

console.log('2' > 3);             // false
console.log(0  >  false);         // false
console.log('23' < '21');         // false
console.log(undefined != null);   // false
console.log('Бег' > 'Бегун');     // false
console.log(0 == false);          // true
console.log(null == 0);           // false
console.log('' == false);         // true
console.log(undefined !== null);  // true
console.log('Играть' < 'Игратъ'); // false
console.log(null == '0');         // false
console.log(null >= 0);           // true
console.log(undefined == null);   // true

let a = 5;
let b = 8; 
let bool = a < b; 
console.log (bool);                         // true
console.log('a => b = ' + (a => b));        // a => b = a => b
console.log('a == b = ' + (a == b));        // a == b = false
console.log('5 == 7 = ' + (5 == 7));        // 5 == 7 = false
console.log('"5" === 7 = ' + ('5' === 7));  // "5" === 7 = false
console.log('5 <= 7 = ' + (5 <= 7));        // 5 <= 7 = true
console.log('5 != 7 = ' + (5 != 7));        // 5 != 7 = true
 
 console.log('null == 0  ' + (null == 0));          // false
 console.log('null === 0  ' + (null === 0));        // false
 console.log('true == 1  ' + (true == 1));          // true
 console.log('true == false  ' + (true == false));  // false
 console.log('true == true  ' + (true == true));    // true
 
console.log('abc == abd = ' + ('abc' == 'abd'));  // false
console.log('abc >= abd = ' + ('abc' >= 'abd'));  // false
console.log('abc <= abd = ' + ('abc' <= 'abd'));  // true
console.log('0 == "" ' + (0 == ""));              // true
console.log('null == "" ' + (null == ""));        // false