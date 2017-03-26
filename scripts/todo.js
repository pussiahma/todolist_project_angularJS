angular.module('todoApp', []);

/*

const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("add");
const todoList = document.getElementById("todos");
const completedList = document.getElementById("completed");
const container = document.getElementById("container");
const taskLists = document.getElementById("taskLists");

function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str != null) {
        todos = JSON.parse(todos_str);

    }
    return todos;
 
}




function newTask(inputvalue, id) {


console.log("task added");

let todos = get_todos();

const newItem = document.createElement("li");
const removeButton = document.createElement("button");
const editButton = document.createElement("button");
const checkBox = document.createElement("input");
const label = document.createElement("label");
const labelInput = document.createElement("input");


checkBox.type = "checkbox";
removeButton.textContent = "X";
editButton.textContent = "edit";
label.textContent = inputvalue;
labelInput.type ="text";

removeButton.className ="remove";
removeButton.className += "btn-secondary close";
editButton.className ="edit";
editButton.className += " btn-secondary";
checkBox.className ="checkbox";


newItem.id = id;

newItem.appendChild(checkBox);
newItem.appendChild(label);
newItem.appendChild(removeButton);
newItem.appendChild(editButton);


return newItem;


}


function show_todos() {
let todos = get_todos();
let storedBoxes = JSON.parse(localStorage.getItem("checkboxes"));  
    for(var i=0; i<todos.length; i++) {
    	let todo = newTask(todos[i], i);
    	todo.firstChild.checked = storedBoxes[i];
console.log(storedBoxes);
if(todo.firstChild.checked) {
	todo.className = "completed";
completed.appendChild(todo);
	}else{
todoList.appendChild(todo);
}

}

    


}



function checkBoxesArray() {
let checkBox = document.getElementsByClassName("checkbox");
let checkBoxes = [];
for(let i = 0; i < checkBox.length; i++) {

	checkBoxes.push(checkBox[i].checked);
console.log(checkBoxes);
}

return checkBoxes;

}



function addNew(input) {
	let todos = get_todos();
    todos.push(input);
    localStorage.setItem('todo', JSON.stringify(todos));
	let newLi = newTask(input);
	todoList.appendChild(newLi);
	for(var i=0; i<todos.length; i++) {
    	newLi.id = i;

 }
}


function removeTask(task) {
    let id = task.id;
    let todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    
}


function editTask(listItem, target, createdElement, button, buttonText) {


	listItem.insertBefore(createdElement, target);
	listItem.removeChild(target);
	button.textContent= buttonText;

}





addTaskButton.addEventListener("click", function() {

let taskText = taskInput.value;

if(taskInput.value === "") {
	alert("add a task please");
}else {	


addNew(taskText);


}

 taskInput.value ="";

});


taskInput.addEventListener("keypress", function(e) {

let key = e.which || e.keyCode;
let taskText = taskInput.value;

    if (key === 13) { 
    	if(taskInput.value === "") {
    		alert("add a task please");
    	}else{

addNew(taskText);


    }
 taskInput.value ="";
}


});



 taskLists.addEventListener("change", function(e){
 const checkBox = e.target;
 let checked = e.target.checked;
const listItem = e.target.parentNode;
let label = e.target.nextSibling;
let id = listItem.id;
let todos = get_todos();
const completed = document.getElementById("completed");
const listItems = document.getElementsByTagName("li");

console.log(e.target);

if(checked && e.target.classList.contains("checkbox")) {
console.log("task completed");
listItem.className = "completed";
completed.appendChild(listItem);


}if(checked == false && e.target.classList.contains("checkbox")) {
	console.log("task not completed");
	listItem.className ="";
	todoList.appendChild(listItem);
}

let checkBoxes = checkBoxesArray();


 localStorage.setItem("checkboxes", JSON.stringify(checkBoxes));

let = newTodos = [];
 for(let i=0; i< listItems.length; i++){
 	console.log(listItems[i]);
 	listItems[i].id = i;
 newTodos.push(listItems[i].children[1].textContent);

 }

todos = newTodos;
console.log(todos);

localStorage.setItem('todo', JSON.stringify(todos));

});


container.addEventListener("click", function(e){
	let todos = get_todos();
	
if(e.target.tagName == "LABEL") {


const li = e.target.parentNode;
const ul = li.parentNode;
const button = e.target.nextSibling.nextSibling;
const text = e.target;
const input = document.createElement("input");
input.value = text.textContent;
let id = li.id;
const checkBox = li.firstChild;

	input.className ="form-control";
	input.type = "text";

editTask(li, text, input, button, "save");

input.addEventListener("keypress", function(e){
var key = e.which || e.keyCode;

    if (key === 13) { 

	text.textContent = input.value;

	

editTask(li, input, text, button, "edit");

if(checkBox.checked){
	li.className = "completed";
}
    todos.splice(id, 1, input.value);
    localStorage.setItem('todo', JSON.stringify(todos));



}
});



}


if(e.target.tagName=="BUTTON"){

	const button = e.target;
	const li = button.parentNode;
	const ul = li.parentNode;
	const id = li.id;

if(button.textContent =="X") {
	
	removeTask(li);
	ul.removeChild(li);
	

}else if(button.textContent =="edit"){
	
	const label = li.getElementsByTagName("label")[0];
	const input = document.createElement("input");
	input.value = label.textContent;
	input.type = "text";
	input.className = "form-control";


editTask(li, label, input, button, "save");

}


else if(button.textContent =="save"){


	let todos = get_todos();
	const input = li.getElementsByTagName("input")[1];
	const label = document.createElement("label");
	label.textContent = input.value;
	const checkBox = li.firstChild;


editTask(li, input, label, button, "edit");
if(checkBox.checked){
	li.className = "completed";
}
    todos.splice(id, 1, label.textContent);
    localStorage.setItem('todo', JSON.stringify(todos));




}


}



});


show_todos();

*/