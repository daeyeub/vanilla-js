const loginForm = document.querySelector(".loginform")
const loginInput = loginForm.querySelector("input")
const loginBtn = loginForm.querySelector("button")
const yourName = document.querySelector(".yourName")
const localName = document.querySelector(".localName")
function loginBtnClick(event){
    console.log("click")
}

function loginFormSubmit(event){
    event.preventDefault()
    const nameValue=(loginInput.value)
    yourName.innerText=nameValue
    localStorage.setItem("your-name",nameValue)
}

const userName = localStorage.getItem("your-name")
localName.innerText=userName


loginForm.addEventListener("submit",loginFormSubmit)
loginBtn.addEventListener("click", loginBtnClick)