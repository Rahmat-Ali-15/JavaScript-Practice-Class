let arrStorage = JSON.parse(localStorage.getItem("todos")) || [];

const myTodos = ()=>{
    const todoVal = document.querySelector(".todos").value;
    if (todoVal.length === 0){
        alert("Plese enter the text...");
        return;
    }

    let data = {
        id: Math.random().toString(36).substring(2,15),
        todoText: todoVal,
        isCompleted: false,
        isEdits: false,
    };



}