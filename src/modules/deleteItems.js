const deleteItem = (index) => {
  const taskIndex = document.getElementById(`task${index}`);
  if (taskIndex !== null) {
    taskIndex.remove();
  }
};

export default deleteItem;