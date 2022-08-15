// https://learn.javascript.ru/switch
// https://learn.javascript.ru/task/rewrite-switch-if-else

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

//***

if (browser === 'Edge') {
  alert( "You've got the Edge!" );
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}


// https://learn.javascript.ru/task/rewrite-if-switch

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}

//***

const number = +prompt('Введите число между 0 и 3', '');

switch (number) {

  case 0:
    alert('Вы ввели число 0');
    break;

  case 1: 
    alert('Вы ввели число 1');
    break;

  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}


//******************


// Strada
// перепишите ваши ряды if else выражений (в программе calc) 

function calc(operation, a, b) {
  let result;

  switch (operation) {
    case 'add':
    case '+':
      result = a + b;
      break;

    case 'multi':
    case '*':
      result = a * b;
      break;

    case 'subtract':
    case '-':
      result = a - b;
      break;

    default:
      result = 'error';
  }

  return result;
}


// Test
console.log(calc('add', 1, 2));      // возвращает 3
console.log(calc('multi', 1, 2));    // возвращает 2
console.log(calc('subtract', 3, 2)); // возвращает 1
console.log(calc('+', 1, 2));        // возвращает 3
console.log(calc('*', 1, 2));        // возвращает 2
console.log(calc('-', 3, 2));        // возвращает 1
console.log(calc('div', 3, 2));      // возвращает error