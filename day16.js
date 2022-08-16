// https://learn.javascript.ru/object

// https://learn.javascript.ru/task/hello-object
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let user = {};
console.log(user);
user.name = 'John';
console.log(user);
user.surname = 'Smith';
console.log(user);
user.name = 'Pete';
console.log(user);
delete user.name;
console.log(user);


// https://learn.javascript.ru/task/is-empty
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

//Должно работать так:
let schedule = {};
console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false


// https://learn.javascript.ru/task/const-object

// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete"; // Да
console.log(user.name);


// https://learn.javascript.ru/task/sum-object

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);


// https://learn.javascript.ru/task/multiply-numeric
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(menu);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);


//***


// Strads
// добавить 1 объект в ваш калькулятор - operations
// внутри объекта operations перечислить все операции add, multi, sub


function calc(operation, a, b) {
  let result;
  const operations = {
    add: '+',
    multi: '*',
    sub: '-',
  }

  if (typeof(a) == 'number' && typeof(b) == 'number') {
    switch (operation) {
      case 'add':
        result = a + b;
        break;

      case 'multi':
        result = a * b;
        break;

      case 'sub':
        result = a - b;
        break;

      default:
        result = 'error';
    }
  } else {
    console.log('Введите числа');
  }

  return result;
}


// Test
console.log(calc('add', 1, 2));      // возвращает 3
console.log(calc('multi', 1, 2));    // возвращает 2
console.log(calc('sub', 3, 2)); // возвращает 1
console.log(calc('div', 3, 2));      // возвращает error
console.log(calc('div', 'add', 2));      // возвращает error