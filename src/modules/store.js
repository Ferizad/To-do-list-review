const getTask = () => {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  return tasks;
};

const addTask = (task) => {
  const tasks = getTask();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const removeTask = (index) => {
  const tasks = getTask();
  const deletedTasks = tasks.filter((task) => task.index !== index);
  deletedTasks.forEach((task, i) => {
    task.index = i;
  });
  localStorage.setItem('tasks', JSON.stringify(deletedTasks));
  window.location.reload();
};

const updateTask = (index, description) => {
  const tasks = getTask();
  const task = tasks.find((taskTask) => taskTask.index === index);
  task.description = description;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export {
  getTask, addTask, removeTask, updateTask,
};