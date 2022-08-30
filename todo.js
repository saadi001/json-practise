function todoList (){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodo(data))
}

function displayTodo(todos){
    const todoContainer = document.getElementById('todo-container');
    for(const todo of todos){
        console.log(todo);
        const todoDiv = document.createElement('todoDiv');
        todoDiv.innerHTML = `
        <h2>userId: ${todo.id}</h2>
        <h4>title: ${todo.title}</h4>
        <p>Is completed: ${todo.completed === true ? 'completed' : 'not completed'}</p>
        `;
        todoContainer.appendChild(todoDiv);
    }
}

todoList();