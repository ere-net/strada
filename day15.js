// https://learn.javascript.ru/while-for
// https://learn.javascript.ru/task/loop-last-value
// Какое последнее значение выведет этот код? Почему?

let i = 3;

while (i) {
  console.log( i-- );
}
// Выведет 1, потом уменьшится до нуля и выйдет из цикла


// https://learn.javascript.ru/task/which-value-while

// 1

let i = 0;
while (++i < 5) console.log( i );  // 1 2 3 4

// 2

let i = 0;
while (i++ < 5) console.log( i );  // 1 2 3 4 5


// https://learn.javascript.ru/task/which-value-for

// 1

for (let i = 0; i < 5; i++) console.log( i );  // 0 1 2 3 4 

// 2

for (let i = 0; i < 5; ++i) console.log( i ); // 0 1 2 3 4 


// https://learn.javascript.ru/task/for-even
// При помощи цикла for выведите чётные числа от 2 до 10.

for (let i = 1; i <= 10; i++) {
  if (i % 2 != 0) continue;
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}


// https://learn.javascript.ru/task/replace-for-while
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
  console.log( `number ${i}!` );
}

let i = 0;

while (i < 3) {
  console.log( `number ${i}!` );
  i++;
}


// https://learn.javascript.ru/task/repeat-until-correct
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

let number;

do {
  number = prompt('Введите число, большее 100', '');
} while (number <= 100 && number);


// https://learn.javascript.ru/task/list-primes

// моё решение

let firstNumber = 2;
let lastNumber = +prompt('Введите конец интервала', '');

function isPrime(a) {
  let i = 2;

  if (a == 2) {
    return true;
  }

  do {
    if (a % i == 0) {
      return false;
    } 
    i++;
  } while (i < a) 
  return true;
}

for (let i = firstNumber; i <= lastNumber; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// решение learn.js

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}



//*****

// Strada
// вывести в консоль числа от 1 до 19 с помощью цикла

for (let i = 1; i < 20; i++) {
  console.log(i);
}

//***

let j = 1;

while (j < 20) {
  console.log(j++);
}

//***

let k = 1;

do {
  console.log(k++);
} while (k < 20);

