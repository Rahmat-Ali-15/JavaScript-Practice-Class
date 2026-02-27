let arrStorage = JSON.parse(localStorage.getItem("todoData")) || [];

const myTodo = (event) => {
    let inputBox = document.querySelector(".input_box");
    inpBoxVal = inputBox.value;

    if (inpBoxVal.trim() === "") {
        return
    }

    const todo = {
        id: Date.now(),
        text: inpBoxVal,
        isEdited: false,
        isCompleted: false,
    }

    arrStorage.push(todo);
    localStorage.setItem("todoData", JSON.stringify(arrStorage));
    appendData();
    inputBox.value = ""
}

const appendData = () => {
    let mainDiv = document.querySelector(".todoDetails");
    mainDiv.innerHTML = ""

    arrStorage.map((el) => {
        let div = document.createElement("div");

        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.style.cursor = "pointer";
        checkBox.checked = el.isCompleted;

        let paraText = document.createElement("p");
        paraText.innerText = el.text;

        let id = document.createElement("p");
        id.innerText = el.id;

        let btnsDiv = document.createElement("div");

        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";


        deleteBtn.addEventListener("click", function () {
            let deleteItem = arrStorage.filter((dl) =>
                el.id != dl.id)
            arrStorage = deleteItem;
            localStorage.setItem("todoData", JSON.stringify(arrStorage));
            appendData()
        })

        editBtn.addEventListener("click", function () {
            let editItem = arrStorage.map((e) => {
                if (el.id === e.id) {
                    return {
                        ...e,
                        isEdited: !e.isEdited
                    }
                    return e;
                }
            });
            arrStorage = editItem;
            localStorage.setItem("todoData", JSON.stringify(arrStorage));
            appendData()
        });

        if (el.isEdited) {
            editBtn.style.display = "none"
        }


        btnsDiv.append(editBtn, deleteBtn);
        div.append(checkBox, id, paraText, btnsDiv);
        mainDiv.append(div)

    })
}