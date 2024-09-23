// Get elements
const input = document.getElementById('todo-input');
const addTaskBtn = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

// Add a task to the list
addTaskBtn.addEventListener('click', () => {
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const newTask = document.createElement('li');
  newTask.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  newTask.appendChild(deleteBtn);


  deleteBtn.addEventListener('click', () => {
    newTask.remove();
  });


  newTask.addEventListener('click', () => {
    newTask.classList.toggle('completed');
  });

  todoList.appendChild(newTask);


  input.value = '';
});
