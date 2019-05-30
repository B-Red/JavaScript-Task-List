//Define the UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners call
loadEventListeners();

//Load all event listeners function
function loadEventListeners() {
    //Add task event
    form.addEventListener('submit', addTask);
}

//Add task function
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }
    //Create li element
    const li = document.createElement('li');
    //Add a class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = document.createElement('a');
    //Add class to link element
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to the li
    li.appendChild(link);

    //Append the li to the ul
    taskList.appendChild(li);

    //Clear the input
    taskInput.value = '';

    e.preventDefault();
}
