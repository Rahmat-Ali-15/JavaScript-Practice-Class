let localStorages = JSON.parse(localStorage.getItem("todoData")) || [];

const myTodo = (event) => {
    let todoInput = document.getElementById("todoInput");
    let todoValue = todoInput.value;

    if (todoValue === "") {
        alert("please add the task");
        return;
    }

    let todos = {
        // id : crypto.randomUUID(),
        id: Date.now(),
        text: todoValue,
        isCompleted: false,
        isEdited: false,
    }

    localStorages.push(todos);
    localStorage.setItem("todoData", JSON.stringify(localStorages));
    appenData();
    event.target.value = "";

}

const appenData = () => {
    const mainDiv = document.querySelector(".infoTodo");
    mainDiv.innerHTML = "";

    localStorages.map((e) => {
        let div = document.createElement("div");
        div.classList.add("inputData_container");

        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.name = "checkBoxTodo";

        let id = document.createElement("p");
        let para = document.createElement("p");

        let editInput = document.createElement("input");
        editInput.classList.add("editInput");
        editInput.value = e.text

        id.innerText = e.id;
        para.innerText = e.text;

        let edit_btn = document.createElement("button");
        let delete_btn = document.createElement("button");
        edit_btn.innerText = "Edit";
        delete_btn.innerText = "Delete";

        edit_btn.classList.add("edit_btn");
        delete_btn.classList.add("delete_btn");


        let cancelBtn = document.createElement("button");
        cancelBtn.innerText = "Cancel"
        
        let confirmBtn = document.createElement("button");
        confirmBtn.innerText = "Confirm"
        // confirmBtn.style.display = "none";
        // cancelBtn.style.display = "none";
        // cancelBtn.style.display = "none";



        // functionality of delete button

        delete_btn.addEventListener("click", function () {
            let deleteItem = localStorages.filter((lm) => e.id != lm.id);
            localStorages = deleteItem;
            localStorage.setItem("todoData", JSON.stringify(localStorages));
            appenData();
        });


        // functionality of edit button

        edit_btn.addEventListener("click", function () {
            let editItem = localStorages.map((ln) => {
                if (e.id === ln.id) {
                    return { ...ln, isEdited: !ln.isEdited };
                }
                return ln;
            });
            localStorages = editItem;
            localStorage.setItem("todoData", JSON.stringify(localStorages));
            console.log(editItem);
            appenData();
        });

        // (e.isEdited === true) ? para.style.display = 'none' : para.style.display = 'block';
        // (e.isEdited === true) ? edit_btn.style.display = 'none' : cancelBtn.style.display = 'block';
        // (e.isEdited === true) ? editInput.style.display = 'block' : editInput.style.display = 'none';

        

        // console.log(localStorages, "this is ls");


        // div.append(checkBox, id, editInput, para, edit_btn,cancelBtn,confirmBtn, delete_btn);
        // mainDiv.append(div);



        // Confirm button
        confirmBtn.addEventListener("click", function () {
            let updatedInput = localStorages.map((item) => {
                if (item.id === e.id) {
                    return {
                        ...item,
                        text: editInput.value,
                        isEdited: false,
                    };
                }
                return item;
            });
            localStorages = updatedInput;
            localStorage.setItem("todoData", JSON.stringify(localStorages));
            appenData();
        });

        // Cancel button
        cancelBtn.addEventListener("click", function () {
            let cancelInput = localStorages.map((item) => {
                if (item.id === e.id) {
                    return {
                        ...item,
                        isEdited: false,
                    };
                }
                return item;
            });
            localStorages = cancelInput;
            localStorage.setItem("todoData", JSON.stringify(localStorages));
            appenData();
        });

        if (e.isEdited) {
            para.style.display = "none";
            edit_btn.style.display = "none";
            editInput.style.display = "inline-block";
            cancelBtn.style.display = "inline-block";
            confirmBtn.style.display = "inline-block";
        } else {
            para.style.display = "block";
            edit_btn.style.display = "inline-block";
            editInput.style.display = "none";
            cancelBtn.style.display = "none";
            confirmBtn.style.display = "none";
        }

        div.append(checkBox, id, editInput, para, edit_btn, cancelBtn, confirmBtn, delete_btn);
        mainDiv.append(div);
    
    })

}