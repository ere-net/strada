// Strada

// Практика ToDo

// Сегодня напишем простой самый простой TODO лист без графического интерфейса.
// Хранилищем будет объект, а имена задач - ключами этого объекта. 
// Функция changeStatus - будет менять статус задачи 
// Функция addTask - добавляет новую задачу
// Функция deleteTask - удаляет задачу
// Функция showList будет выводить весь список дел в виде 
 
// Создайте список дел, добавьте в него пару задач, поменяйте их статусы несколько раз и выведете результат в консоль 



// Пусть статус true у выполненных задач, статус false - у невыполненных

let todoList = {
  
  changeStatus(task) {
    (this[task] === false) ? (this[task] = true) : (this[task] = false);
  },

  addTask(task) {
    this[task] = false;
  },

  deleteTask(task) {
    delete this[task];
  },

  showList() {
    for (let key in this) {
      if (typeof(this[key]) === 'boolean') {
        console.log(key + ': ' + this[key]);
      }
    }
  },

};

todoList.addTask('First Task');         // First Task: false
todoList.addTask('Second Task');        // First Task: false; Second Task: false
todoList.changeStatus('Second Task');   // First Task: false; Second Task: true
todoList.changeStatus('First Task');    // First Task: true; Second Task: true
todoList.changeStatus('Second Task');   // First Task: true; Second Task: false
todoList.addTask('Third Task');         // First Task: true; Second Task: false; Third Task: false
todoList.deleteTask('Third Task');      // First Task: true; Second Task: false
todoList.showList();                    // First Task: true; Second Task: false


