const form = document.getElementById('addTask');
const taskList = document.getElementById('tasksList');
const pending = document.getElementById('pending');
let count = 0

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task');
	addTask(inputField.value);
	form.reset();
};

const addTask = (description) => {
 	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);
  newTask.classList.add('item');

  newTask.addEventListener('click', ()=> {
    if(newTask.checked){
      taskContainer.classList.add('select')
      refreshPending('remove');
    } else {
      taskContainer.classList.remove('select')
      refreshPending('add');
    }
  })

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('taskItem');
	taskContainer.appendChild(newTask);
  refreshPending('add');
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}

const refreshPending = (action)=> {
  if(action == 'add'){
    count += 1;
    pending.innerHTML= `Tarefas pendentes: ${count}`;

  } else {
    count -= 1;
    pending.innerHTML= `Tarefas pendentes: ${count}`;
  }
}