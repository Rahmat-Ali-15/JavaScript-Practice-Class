// let arrStorage = JSON.parse(localStorage.getItem("todos")) || [];

// const myTodos = ()=>{
//     const todoVal = document.querySelector(".todos").value;
//     if (todoVal.length === 0){
//         alert("Plese ter the text...");
//         return;
//     }

//     let data = {
//         id: Math.random().toString(36).substring(2,15),
//         todoText: todoVal,
//         isCompleted: false,
//         isEdits: false,
//     };
// }

let arrStorage = JSON.parse(localStorage.getItem("todoData")) || [];

const inputBox = document.querySelector(".input_box");
const listContainer = document.querySelector(".list_container");

const addTask = ()=>{
    if(inputBox.value === ""){
        alert("You must write something!")
    }
    else{
        const Li = document.createElement("li");
        const btnsDiv = document.createElement("div");
        const editBtn = document.createElement("button");
        const completeBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");
        Li.innerHTML = inputBox.value;

        editBtn.innerText = "EDIT";
        completeBtn.innerText = "COMPLETED";
        deleteBtn.innerText = "DELETED";

        btnsDiv.classList.add("btn_container");
        
        editBtn.style.color = "#21b77f";
        completeBtn.style.color = "#db963b";
        deleteBtn.style.color = "#b02541";


        const idDiv = document.createElement("div");
        let data = {
            id : Math.random().toString(10).substring(2,11),
            todoInput : inputBox.value,
            isCompleted : false,
            isEdits : false,
        };
        idDiv.innerHTML = `<small>ID: ${data.id}</small>`;

        arrStorage.push(data);
        localStorage.setItem("todoData", JSON.stringify(arrStorage));


        btnsDiv.append(editBtn,completeBtn,deleteBtn);
        Li.append(idDiv, btnsDiv);
        listContainer.append(Li);
    }
    inputBox.value = "";
}
const addBtn = () => {
    listContainer.style.display = "flex";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        const li = e.target.closest("li");
        const idDiv = li.querySelector("small");
        const id = idDiv.innerText.split("ID: ")[1];
        
        if (e.target.innerText === "EDIT") {
            editTask(li, id);
        } 
        else if (e.target.innerText === "COMPLETED") {
            completeTask(li, id);
        } 
        else if (e.target.innerText === "DELETED") {
            deleteTask(li, id);
        }
    }
});

const editTask = (li, id) => {
    const newTask = prompt("Edit your task:", li.firstChild.textContent.trim());
    if (newTask) {
        li.firstChild.textContent = newTask + " ";
        // Update localStorage
        arrStorage = arrStorage.map(item => {
            if (item.id === id) {
                item.todoInput = newTask;
                item.isEdits = true;
            }
            return item;
        });
        localStorage.setItem("todoData", JSON.stringify(arrStorage));
    }
};

const completeTask = (li, id) => {
    li.style.textDecoration = "line-through";
    li.style.color = "#888";
    // Update localStorage
    arrStorage = arrStorage.map(item => {
        if (item.id === id) {
            item.isCompleted = true;
        }
        return item;
    });
    localStorage.setItem("todoData", JSON.stringify(arrStorage));
};

const deleteTask = (li, id) => {
    li.remove();
    // Update localStorage
    arrStorage = arrStorage.filter(item => item.id !== id);
    localStorage.setItem("todoData", JSON.stringify(arrStorage));
};

inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
        addBtn();
    }
});
