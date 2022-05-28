const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoBtn = todoForm.querySelector("button")
const todoList = document.querySelector(".todo-list")

let todos = []
function doSubmit (event){
    event.preventDefault();
    const li =document.createElement("li");
    todoList.appendChild(li);
    const todoli = document.querySelector("li");
    todoli.classList.add(Date.now());
    li.innerText=todoInput.value;
    todos.push(todoInput.value);
    localStorage.setItem("todo", todos);
}
const todoitem = localStorage.getItem("todo")
const strTodoitem=String(todoitem)
// li.innerText=todoitem;
todos.push(strTodoitem.split(","))
console.log(todos)


todoForm.addEventListener("submit", doSubmit);