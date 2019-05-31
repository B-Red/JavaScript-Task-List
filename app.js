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
    //Remove task event
    taskList.addEventListener('click', removeTask);
    //Clear all tasks event
    clearBtn.addEventListener('click', clearTasks);
    //Filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

//Add task function
function addTask(e) {
    //Verify if there is a task to add
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

//Remove Task function
function removeTask(e) {
    //Check if the target to remove is the correct target
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            //Select the targeted li by bubbling up twice out of the i element
            e.target.parentElement.parentElement.remove();
        }
    }
}

//Clear Tasks function
function clearTasks() {
    //Loop through and remove each child
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

//Filter tasks function
function filterTasks(e) {
    //Set the target to lowercase and grab the text from the input
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}
