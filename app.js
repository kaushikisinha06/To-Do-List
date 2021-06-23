function loadInitialtoDos() {
    const initialTodos = ['Prepare for interview', 'Cook food', 'Stay home', 'Stay Safe'];

    showInitialtoDos(initialTodos);
    filtertoDo(initialTodos);
    addtoDo();
    deltoDO()
}

function showInitialtoDos(initialTodos) {
    let todos = initialTodos.map(todo => 
        `<div class="to-dos">
            ${todo}
            <span class="del-todo"><i class="fas fa-trash"></i> </span>
        </div>`
    ).join('');
    let frag = document.createDocumentFragment();
    let temp = document.createElement('div');
    temp.innerHTML = todos;
    frag.appendChild(temp);
    document.querySelector('.todolist-container').appendChild(frag);
}

function deltoDO() {
    document.querySelector('.todolist-container').addEventListener('click', () => {
        //Event Delegation is used here
        if(event.target.classList.contains('fa-trash')) {
            event.target.parentNode.parentNode.remove();
        }
    })
}

function filtertoDo(toDos) {
    const searchBox = document.getElementById('search-box');
    searchBox.addEventListener('keyup', (event) => {
        let value = event.target.value;
        let filtertoDos = toDos.filter(el => el.toLowerCase().indexOf(value.toLowerCase())>-1);
        document.querySelector('.todolist-container').innerHTML = '';
        showInitialtoDos(filtertoDos);
    });
}

function addtoDo() {
    const addtoDo = document.getElementById('add-todo');
    addtoDo.addEventListener('keypress', (evt) => {
        if(evt.keyCode === 13) {
            let newtoDo = `<div class="to-dos">
                    ${evt.target.value}
                    <span class="del-todo"><i class="fas fa-trash"></i> </span>
                </div>`
            let frag = document.createDocumentFragment();
            let temp = document.createElement('div');
            temp.innerHTML = newtoDo;
            frag.appendChild(temp);
            document.querySelector('.todolist-container').appendChild(frag);
            addtoDo.value = '';                
        }
    })
}
