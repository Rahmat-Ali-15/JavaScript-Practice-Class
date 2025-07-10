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
                return ln
            });
            localStorages = editItem;
            localStorage.setItem("todoData", JSON.stringify(localStorages));
            console.log(editItem);
            appenData();
        });

        (e.isEdited === true) ? para.style.display = 'none' : para.style.display = 'block';
        (e.isEdited === true) ? editInput.style.display = 'block' : editInput.style.display = 'none';


        console.log(localStorages, "this is ls")


        div.append(checkBox, id, editInput, para, edit_btn, delete_btn);
        mainDiv.append(div);
    })

}