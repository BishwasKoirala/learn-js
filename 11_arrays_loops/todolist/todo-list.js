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

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoOnject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
    <p>
      ${name} ${dueDate}
      <button onclick="
      todoList.splice(${i},1);
      rendertodoList()
      ">Delete</button>
    </p>
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

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
