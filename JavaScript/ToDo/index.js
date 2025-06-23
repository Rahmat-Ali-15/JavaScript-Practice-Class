// let arrStorage = JSON.parse(localStorage.getItem("todos")) || [];

// const myTodos = ()=>{
//     const todoVal = document.querySelector(".todos").value;
//     if (todoVal.length === 0){
//         alert("Plese enter the text...");
//         return;
//     }

//     let data = {
//         id: Math.random().toString(36).substring(2,15),
//         todoText: todoVal,
//         isCompleted: false,
//         isEdits: false,
//     };



// }

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

        btnsDiv.append(editBtn,completeBtn,deleteBtn);
        Li.append(btnsDiv);
        listContainer.append(Li);

        editBtn.style.color = "#21b77f";
        completeBtn.style.color = "#db963b";
        deleteBtn.style.color = "#b02541";
    }
    inputBox.value = "";
}
const addBtn = () => {
    listContainer.style.display = "flex";
}