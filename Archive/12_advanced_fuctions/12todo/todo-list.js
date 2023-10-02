const todoList = [
  {
    name: "make dinner",
    dueDate: "2022-12-22",
  },
  {
    name: "wash dishes",
    dueDate: "2022-12-22",
  },
];

rendertodoList();

function rendertodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject,index) => {
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button 
    " class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });


  document.querySelector(".js-todo-list")
  .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton,index) => {
    deleteButton.addEventListener('click',() => {
      console.log(index);
      todoList.splice(index,1);
      rendertodoList()
    });
  });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click',() => {addTodo();})

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInuptElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInuptElement.value;

  todoList.push({
    // name:name,
    // dueDate:dueDate,
    name,
    dueDate,
  });

  inputElement.value = "";

  rendertodoList();
}

// next display each vale on the page
