// https://learn.javascript.ru/function-basics
// https://learn.javascript.ru/task/if-else-required

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}

// ===

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}


// https://learn.javascript.ru/task/rewrite-function-question-or
// Сделайте два варианта функции checkAge:
// Используя оператор ?
// Используя оператор ||

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}


// https://learn.javascript.ru/task/min
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a, b) {
  return (a < b) ? a : b;
}

min(2, 5);  // == 2
min(3, -1); // == -1
min(1, 1);  // == 1


// https://learn.javascript.ru/task/pow
// Напишите функцию pow(x,n), которая возвращает x в степени n. 
// Иначе говоря, умножает x на себя n раз и возвращает результат.
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

function pow(number, power) {
  result = number ** power;
  return result;
}

pow(3, 2);    // = 3 * 3 = 9
pow(3, 3);    // = 3 * 3 * 3 = 27
pow(1, 100);  // = 1 * 1 * ...* 1 = 1

let myNumber = +prompt('Введите число', '');
let myPower = +prompt('Введите степень', '');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert(pow(myNumber, myPower));
}



// Strada
// Создать простой калькулятор с именем сalc, который будет принимать значение a и значение b, а так же идентификатор нужного действия.
//
// Пример вызова такой функции calc
// сalc(‘add’, 1, 2) - возвращает 3
// сalc(‘multi’, 1, 2) - возвращает 2
// сalc(’subtract’, 3, 2) - возвращает 1
// Делить пока ничего не надо. 

function calc(operation, a, b) {
  if (operation === 'add') {
    return a + b;
  } else if (operation === 'multi') {
    return a * b;
  } else if (operation === 'subtract') {
    return a - b;
  } else {
    return 'error';
  }
}

// Test
console.log(calc('add', 1, 2));      // возвращает 3
console.log(calc('multi', 1, 2));    // возвращает 2
console.log(calc('subtract', 3, 2)); // возвращает 1
console.log(calc('div', 3, 2));      // возвращает error