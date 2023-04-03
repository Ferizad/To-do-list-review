import './style.css';
import addItem from './modules/addItems.js';
import deleteItem from './modules/deleteItems.js';
import Completed from './modules/Completed.js';
import {
  addTask, getTask, removeTask, updateTask,
} from './modules/store.js';

const display = () => {
  const tasks = getTask() || [];
  if (tasks) {
    tasks.map((task) => addItem(task));
  }
};

display();
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const tasks = getTask();
  const taskInput = document.getElementById('task').value;
  const taskTask = {
    index: tasks.length,
    description: taskInput,
    completed: false,
  };

  if (taskInput !== '') {
    addItem(taskTask);
    addTask(taskTask);
    document.getElementById('form').reset();
  }
});

const inputField = document.querySelectorAll('.description');

inputField.forEach((task, index) => {
  task.addEventListener('change', (e) => {
    const updateInput = e.target.value;
    const tasks = getTask();
    tasks[index].description = updateInput;
    updateTask(index, tasks[index].description);
    window.location.reload();
  });
});
inputField.forEach((task, index) => {
  task.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const updateInput = e.target.value;
      const tasks = getTask();
      tasks[index].desciption = updateInput;
      updateTask(index, tasks[index].description);
      window.location.reload();
    }
  });
});

window.remove = (index) => {
  deleteItem(index);
  removeTask(index);
};

window.completedTodo = (index) => {
  Completed(index);
};

document.getElementById('allCompleted').addEventListener('click', () => {
  const tasks = getTask();
  const allCompleted = tasks.filter((task) => !task.completed);
  allCompleted.forEach((task, i) => {
    task.index = i;
  });
  localStorage.setItem('tasks', JSON.stringify(allCompleted));
  window.location.reload();
});
