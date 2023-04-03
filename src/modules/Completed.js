import { getTask } from './store.js';

const Completed = (index) => {
  const completed = document.getElementById(`check${index}`).toggleAttribute('checked');
  const tasks = getTask();

  tasks[index].completed = completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default Completed;