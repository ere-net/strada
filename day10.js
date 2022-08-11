// https://learn.javascript.ru/ifelse
// https://learn.javascript.ru/task/if-zero-string

if ("0") {
  console.log( 'Привет' );
}


// https://learn.javascript.ru/task/check-standard

let standard = prompt("Какое «официальное» название JavaScript?", "");

if (standard == "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}


// https://learn.javascript.ru/task/sign

let myNumber = prompt("Введите число", "");

if (myNumber == 0) {
  alert("0");
} else if (myNumber > 0) {
  alert("1");
} else {
  alert("-1");
}


// https://learn.javascript.ru/task/rewrite-if-question

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

// Перепишите конструкцию if с использованием условного оператора '?'

let result = (a + b < 4) ? 'Мало' : 'Много';


// https://learn.javascript.ru/task/rewrite-if-else-question

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

// Перепишите if..else с использованием нескольких операторов '?'.
// Для читаемости рекомендуется разбить код на несколько строк.

let message = (login == 'Сотрудник') ? 'Привет' :
              (login == 'Директор') ? 'Здравствуйте' :
              (login == '') ? 'Нет логина' :
              '';


// Strada
// взять программы из прошлых шагов и добавьте им вариативности, повлиять на результат в зависимости от исходных данных

let firstNumber = prompt('Введите первое число', '');
let secondNumber = prompt('Введите второе число', '');

if (+firstNumber > +secondNumber) {
  alert('Первое число больше');
} else if (+firstNumber < +secondNumber) {
  alert('Второе число больше');
} else {
  alert('Числа равны');
}



//*******************************************

// https://learn.javascript.ru/logical-operators
// https://learn.javascript.ru/task/alert-null-2-undefined

alert( null || 2 || undefined ); // 2


// https://learn.javascript.ru/task/alert-or

alert( alert(1) || 2 || alert(3) ); // сначала 1, затем 2 - сработает alert, а потом (undefined || 2) выведет 2


// https://learn.javascript.ru/task/alert-1-null-2

alert( 1 && null && 2 ); // null


// https://learn.javascript.ru/task/alert-and

alert( alert(1) && alert(2) ); // сначала 1, а затем undefined
// Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined (== false).
// Поэтому до правого alert дело не дойдёт, вычисления закончатся на левом.


// https://learn.javascript.ru/task/alert-and-or

alert( null || 2 && 3 || 4 ); // 3


// https://learn.javascript.ru/task/check-if-in-range
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

let age;

if (age >= 14 && age <= 90) 


// https://learn.javascript.ru/task/check-if-out-range
// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

1) if (!(age >= 14 && age <= 90))
2) if (age < 14 || age > 90)


// https://learn.javascript.ru/task/if-question
// Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?

if (-1 || 0) alert( 'first' );  // 'first'
if (-1 && 0) alert( 'second' ); // -
if (null || -1 && 1) alert( 'third' ); // 'third'


// https://learn.javascript.ru/task/check-login

let user = prompt('Кто там?', '');

if (user === 'Админ') {

  let password = prompt('Пароль?', '');

  if (password === 'Я главный') {
    alert('Здравствуйте!');
  } else if (password === '' || password === null) {
    alert('Отменено');
  } else {
    alert('Неверный пароль');
  }

} else if (user === '' || user === null) {
  alert('Отменено');
} else {
  alert('Я вас не знаю');
}



// Strada
// прочитать про Логические операторы
// использовать их внутри условий

// см. выше