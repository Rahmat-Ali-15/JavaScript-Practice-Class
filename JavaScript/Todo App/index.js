let arrStorage = JSON.parse(localStorage.getItem("todoDatas")) || [];

const myTodo = (event) => {
    let todoInput = document.querySelector(".input_box");
    let todoValue = todoInput.value;

    if(todoValue === ""){
        alert("Add some task");
        return;
    }

    const todos = {
        id : Date.now(),
        text : todoValue,
        isEdited : false,
        isCompleted : false,
    }

    arrStorage.push(todos);
    localStorage.setItem("todoDatas",JSON.stringify(arrStorage));
    appenData();
    todoInput.value = "";

}

const appenData = () => {
    const mainDiv = document.querySelector(".todoDetails");
    mainDiv.innerHTML = "";

    arrStorage.map((e) =>{
        let div = document.createElement("div");
        div.classList.add("todoDetails_container");

        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.checked = e.isCompleted;

        let id = document.createElement("p");
        id.innerText = e.id;
        id.classList.add("id");

        let inputText = document.createElement("p");
        inputText.innerText = e.text;
        inputText.classList.add("inputText");

        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("edit_btn");
        
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete_btn");

        let editInput = document.createElement("input");
        editInput.classList.add("editInput");
        editInput.value = e.text;

        
        
        // Functionality of Edit button
        
        editBtn.addEventListener("click", function() {
            let editItem = arrStorage.map((el) =>{
                if(e.id === el.id){
                    return {...el,isEdited: !el.isEdited};
                }
                return el;
            });
            arrStorage = editItem;
            localStorage.setItem("todoDatas",JSON.stringify(arrStorage));
            appenData();
        });

        
        // Functionality of Delete button
        
        deleteBtn.addEventListener("click", function() {
            let deleteItem = arrStorage.filter((dl) => e.id != dl.id );
            arrStorage = deleteItem;
            localStorage.setItem("todoDatas", JSON.stringify(arrStorage));
            appenData();
        });
        

        // this is for when I click on the edit button then edit button will not display instead of edit button cancel & confirm button will display

        let cancelBtn = document.createElement("button");
        let confirmBtn = document.createElement("button");

        cancelBtn.innerText = "Cancel";
        confirmBtn.innerText = "Confirm";
        cancelBtn.classList.add("cancelBtn");
        confirmBtn.classList.add("confirmBtn");


        // Functionality of Cancel button

        cancelBtn.addEventListener("click", function() {
            let cancelItem = arrStorage.map((cl) =>{
                if (e.id === cl.id){
                    return {
                        ...cl,
                        isEdited : false,
                    };
                }
                return cl;
            });
            arrStorage = cancelItem;
            localStorage.setItem("todoDatas", JSON.stringify(arrStorage));
            appenData();
        })


        // Functionality of Confirm button

        confirmBtn.addEventListener("click", function() {
            let confirmItem = arrStorage.map((c) =>{
                if (e.id === c.id){
                    return {
                        ...c,
                        text : editInput.value,
                        isEdited : false,
                    }
                }
                return c;
            });
            arrStorage = confirmItem;
            localStorage.setItem("todoDatas", JSON.stringify(arrStorage));
            appenData();
        })


        // Functionality of Checkbox

        checkBox.addEventListener("change", function() {
            let checkBoxItem = arrStorage.map((ch) => {
                if (e.id === ch.id){
                    return {
                        ...ch,
                        isCompleted : checkBox.checked,
                    }
                }
                return ch;
            });
            arrStorage = checkBoxItem;
            localStorage.setItem("todoDatas", JSON.stringify(arrStorage));
            appenData();
        })

        
        if(e.isEdited){
            editInput.style.display = "block";
            inputText.style.display = "none";
            editBtn.style.display = "none";
            cancelBtn.style.display = "block";
            deleteBtn.style.display = "none";
            confirmBtn.style.display = "block";
            checkBox.disabled = true;
            
        }
        else{
            editInput.style.display = "none";
            editBtn.style.display = "block";
            cancelBtn.style.display = "none";
            deleteBtn.style.display = "block";
            confirmBtn.style.display = "none";
            checkBox.style.textDecoration = "none";
        }
        
        if(e.isCompleted){
            inputText.style.textDecoration = "line-through";
            editBtn.style.textDecoration = "line-through";
            deleteBtn.style.textDecoration = "line-through";
            id.style.textDecoration = "line-through";
            editBtn.disabled = true;
        }
        else{
            inputText.style.textDecoration = "none";
            editBtn.style.textDecoration = "none";
            deleteBtn.style.textDecoration = "none";
            id.style.textDecoration = "none";
        }

        div.append(checkBox,id,inputText,editInput,editBtn,cancelBtn,deleteBtn,confirmBtn);
        mainDiv.append(div);


    })
};


window.onload = () => {
    appenData();
};
