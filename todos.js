const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoBtn = todoForm.querySelector("button")
const todoList = document.querySelector(".todo-list")

function deleteToDo(event){
    console.log(event.target.parentElement);
    event.target.parentElement.remove();
}

let todos=[];

function saveToDo(newToDo){
    todos=push(...newToDo);
    localStorage.setItem("todos",todos)
    // console.log(todos[1],"*****")
}

function paintTodo(newToDo){
    console.log(newToDo)
    const li =document.createElement("li");
    const span =document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newToDo;
    button.innerText = "x";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li)
}

function todoFormSubmit(event){
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = "";
    paintTodo(newToDo);
    saveToDo(newToDo)
}

todoForm.addEventListener("submit", todoFormSubmit)