
// count initial ToDo
countTodos();

// capture click event
document.getElementById('checkAll').addEventListener('click', function(){
    AllDone();
});

//capture enter key press
document.getElementById('todo-to-add').addEventListener('keypress',function (e) {
      e.preventDefault // Do not submit form
      if (e.which == 13) { // check if enter is pressed
        var todo = document.getElementById('todo-to-add').value;
        console.log(todo);
        addToDo(todo);
      }
});

// capture click event
document.getElementById('addTODO').addEventListener('click',function () {
    var todo = document.getElementById("todo-to-add").value;
    console.log(todo);
    addToDo(todo);
});


var todos = document.querySelectorAll('#sortable li input[type="checkbox"]');
for (var i = 0; i < todos.length; i++) {
    todos[i].addEventListener('change',function(){
        if(this.checked == true){
            var doneItem = this.parentElement.innerText
            $(this).parent().parent().parent().addClass('remove');
            console.log('done item: ' +doneItem);
            done(doneItem);
            countTodos();
        }
    });
}

// capture click event on button minus on Already Done 
var already_done_elements = document.getElementsByClassName("remove-item");
for (var i = 0; i < already_done_elements.length; i++) {
    already_done_elements[i].addEventListener('click',function(){
        console.log(this);
        removeItem(this);
    });
}

// add new todo
function addToDo(todo, value){
    createTodo(todo, value); 
    countTodos();
}

// count tasks (To Complete)
function countTodos(){
    let todos = document.querySelectorAll('#sortable li');
    let counter = 0;

    todos.forEach(todo => {
        if (todo) {
            counter++;
        }
    });

    document.querySelector('.count-todos').textContent = counter;
}


function createTodo(text, value){
    let list = document.getElementById("sortable");
    let newItem = document.createElement("li");

    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "checkbox");

    let newLabel = document.createElement("label");
    newLabel.textContent = text;
    newLabel.setAttribute("class", "text-break");

    let newInput = document.createElement("input");
    newInput.setAttribute("type", "checkbox");
    newInput.setAttribute("value", "");

    newLabel.prepend(newInput);

    newItem.appendChild(newDiv);
    newDiv.appendChild(newLabel);
    list.appendChild(newItem);

    newInput.addEventListener("change", function() {
        if (this.checked) {
            var doneItem = this.parentElement.innerText.trim();
            console.log("done item: " + doneItem);
            done(doneItem);
            countTodos();
        }
    });

    if (value == 1) {
        document.getElementById("todo-to-add").value = "";
        return;
    } else {
        saveInformation(newItem.textContent, 1);
    }

    document.getElementById("todo-to-add").value = "";
}

function done(doneItem){
    let doneList = document.getElementById("done-items");

    let todos = document.querySelectorAll('#sortable li');

    todos.forEach(todo => {
        if (todo.innerText.trim() === doneItem.trim()) {
            todo.remove();
        }
    });

    let newLi = document.createElement("li");

    let newButton = document.createElement("button");
    newButton.setAttribute("class", "remove-item btn btn-default btn-xs pull-right");

    newButton.addEventListener("click", function() {
        removeItem(this);
    });

    let newSpan = document.createElement("span");
    newSpan.setAttribute("class", "fa fa-minus-square");

    newLi.textContent = doneItem;

    saveInformation(newLi.textContent);

    newLi.appendChild(newButton);
    newButton.appendChild(newSpan);
    doneList.appendChild(newLi);
}

function AllDone(){
    let todos = document.querySelectorAll('#sortable li');

    todos.forEach(todo => {
        done(todo.textContent);
        todo.remove();
    })
    countTodos();
}

function removeItem(element){
    element.parentElement.remove(); 
    countTodos();
}

function saveInformation(task, value) {
    if (value == 1) {
        let array = JSON.parse(localStorage.getItem("sortable")) || [];
        array.push(task);
        localStorage.setItem("sortable", JSON.stringify(array));
    } else {
        let array = JSON.parse(localStorage.getItem("done-items")) || [];
        array.push(task);
        localStorage.setItem("done-items", JSON.stringify(array));
    }
}

function loadInformation() {
    let array1 = JSON.parse(localStorage.getItem("sortable")) || [];
    array1.forEach(task => addToDo(task, 1));
}

loadInformation();

