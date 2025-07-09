let localStorages = JSON.parse(localStorage.getItem("todoData")) || [];

const myTodo = (event) =>{
    let todoInput = document.getElementById("todoInput");
    let todoValue = todoInput.value;

    if(todoValue === ""){
        alert("please add the task");
        return;
    }

    let todos = {
        // id : crypto.randomUUID(),
        id : Date.now(),
        text: todoValue,
        isCompleted : false,
        isEdited : false,
    }

    localStorages.push(todos);
    localStorage.setItem("todoData", JSON.stringify(localStorages));
    appenData();
    event.target.value = "";

}

const appenData = () =>{
    const mainDiv = document.querySelector(".infoTodo");
    mainDiv.innerHTML = "";
    
    localStorages.map((e)=>{
        let div = document.createElement("div");
        div.classList.add("inputData_container");

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

        edit_btn.classList.add("edit_btn");
        delete_btn.classList.add("delete_btn");



        // functionality of delete button

        delete_btn.addEventListener("click", function(){
            let deleteItem = localStorages.filter((lm)=>e.id != lm.id);
            localStorages = deleteItem;
            localStorage.setItem("todoData", JSON.stringify(localStorages));
            appenData();
        });
        

        // functionality of edit button

        edit_btn.addEventListener("click", function(){
            let editItem = localStorages.filter((ln)=>e.id != ln.id);
            localStorages = editItem;
            localStorage.setItem("todoData", JSON.stringify(localStorages));
            appenData();
        });



        div.append(checkBox,id,para,edit_btn,delete_btn);
        mainDiv.append(div);
    })

}