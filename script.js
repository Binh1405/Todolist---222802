const todoList = document.querySelector(".task-list")
console.log("todolist", todoList)
const filterOption = document.querySelector("#filter")
const form = document.querySelector(".form")
const taskInput = document.querySelector("#newItem")

//Mark done and Remove a task
const markDone = (todoLi) => {
    todoLi.classList.toggle("done")
}
const removeTask=(todoLi)=>{
    todoLi.classList.add("fall")
    todoLi.addEventListener("transitionend", ()=>todoLi.remove())
}
todoList.addEventListener("click", (e)=>{
    console.log(e)
    const element=e.target
    console.log(element.classList)
    if(element.classList[1] === "btn-action-done"){
    markDone(element.parentNode.parentNode)
    }else if(element.classList[1] ==="btn-action-delete"){
        removeTask(element.parentNode.parentNode)
    }
})
 
//Filter tasks
const filterTasks = (hideCompletedTasks) => {
     todoList.querySelectorAll("li").forEach((todoLi) => {
     if(todoLi.classList.contains("done")){
        todoLi.style.display = hideCompletedTasks? "none" : "flex"
     }}
     )
}
filterOption.addEventListener("click", (e) => {
filterTasks(e.target.checked)})
//Add a new task

const addTask = (taskLabel) =>{
    console.log(taskLabel)
    const todoLi = document.createElement("li")
    const labelSpan = document.createElement("span")
    labelSpan.className = "label"
    labelSpan.textContent = taskLabel
    todoLi.appendChild(labelSpan)
    todoList.appendChild(todoLi)
    const divActions = document.createElement("div")
    divActions.className = "actions"
    divActions.innerHTML = `<input type="checkbox" class="btn-action btn-action-done">
    <button class="btn-action btn-action-delete">✖</button>`
    todoLi.appendChild(divActions)
}
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const taskLabel = taskInput.value.trim()
    if(taskLabel) {
        addTask(taskLabel)
        taskInput.value = "";
    }
})