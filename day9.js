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