let localStorages = JSON.parse(localStorage.getItem("todoData")) || [];

const myTodo = (event) =>{
    let todoValue = event.target.value;

    if(todoValue === ""){
        alert("please add the task");
        return;
    }

    let todos = {
        id : crypto.randomUUID(),
        isCompleted : false,
        isEdited : false,
        text: todoInput.value,
    }

    localStorages.push(todos);
    localStorage.setItem("todoData", JSON.stringify(localStorages));
    event.target.value = ""

}

const appenData = () =>{
    const mainDiv = document.querySelector(".infoTodo");

    localStorages.map((e)=>{
        let civ = document.createElement("div");
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.name = "checkBoxTodo";

        let id = document.createElement("p");
        let para = document.createElement("p");

        id.innerText = e.id;
        para.innerText = e.text;

        let edit_btn = document.createElement("button");
        let delete_btn = document.createElement("button");
        edit_btn.innerText = "Edit";
        delete_btn.innerText = "Delete";

        div.append(checkBox,id,para,edit_btn,delete_btn);
        mainDiv.append(div);
    })

}