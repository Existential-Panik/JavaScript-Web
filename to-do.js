const listInput = document.querySelector('#list-item');
const addButton = document.querySelector('.addBtn');
const removeAll = document.querySelector('.rmvBtn');
const todoList = document.querySelector('.listItems');

removeAll.addEventListener('click', function (e) {
    e.preventDefault();    
    while (todoList.firstChild) {
    todoList.firstChild.remove();
}  
})

addButton.addEventListener('click',function (e) {
    e.preventDefault();
    if (listInput.value === '') {
        alert("There was no input provided in the field.\nPlease input some values to add to the list.")
    } 
    else {
        todoList.innerHTML += "<li>" + listInput.value + "</li>"    
    }
})