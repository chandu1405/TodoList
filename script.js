const todosUL = document.getElementById('todos')
const form = document.getElementById('form')
const input = document.querySelector('#input')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo => addToDo(todo))
}


form.addEventListener("submit",(e) => {
    e.preventDefault();
    addToDo();
})

function addToDo(todo){
    let todoText = input.value;

    if(todo){
        todoText = todo.text
    }

    if (todoText){
        const todoEl = document.createElement("li")
        if(todo && todo.completed){
            todoEl.classList.add("completed")
        }
        todoEl.innerText = todoText;


        todoEl.addEventListener('click',()=>{
            todoEl.classList.toggle('completed')
            updateSL()
        })

        todoEl.addEventListener('contextmenu',()=>{
            todoEl.classList.toggle('completed')

            updateSL()
        })


        todosUL.appendChild(todoEl)
        console.log(todosUL)
        input.value = ''

        updateSL()
    }
    
}

function updateSL(){
    todosEl = document.querySelector('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text:todoEl.innerText,
            completed:todoEl.classList.contains('completed')
        })

        
    })
    localStorage.setItem("todos",JSON.stringify(todos))



}