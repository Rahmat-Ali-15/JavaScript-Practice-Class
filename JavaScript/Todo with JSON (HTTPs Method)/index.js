const todoApi = `https://api-server-zecj.onrender.com/todo`;

const myTodo = async () => {
    let arr = [];
    let inputBox = document.querySelector(".input_box");
    let inputValue = inputBox.value.trim();
    
    if (inputValue.trim() === "") {
        alert("Please Add Some Task.");
        return;
    }

    let todo = {
        id: Date.now(),
        text: inputValue,
        isEdited: false,
        isCompleted: false,
    }
    arr.push(todo)

    try {
        const res = await fetch(todoApi, {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                "Content-type": "application/json",
            }
        });
        getTodos();
        inputBox.value = "";
    } catch (error) {
        console.log(error);
    }
}


function appenData(res) {
    let parentContainer = document.querySelector(".parent_container");
    let mainDiv = document.querySelector(".todoDetails");
    mainDiv.innerHTML = "";

    res.forEach((e) => {
        let div = document.createElement("div");
        div.classList.add("todoDetails_container")

        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.style.cursor = "pointer";
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


        let cancelBtn = document.createElement("button");
        cancelBtn.classList.add("cancelBtn");
        cancelBtn.innerText = "Cancel";
        
        
        let confirmlBtn = document.createElement("button");
        confirmlBtn.classList.add("confirmBtn");
        confirmlBtn.innerText = "Confirm";

        let editInput = document.createElement("input");
        editInput.value = e.text;
        editInput.classList.add("editInput");


        let yesBtn = document.querySelector(".yes_btn");
        let noBtn = document.querySelector(".no_btn");


/* <- ==================== Functionality of Edit butoon ======================= -> */

        editBtn.addEventListener("click", async function(){
            try {
                let updateData = {
                    isEdited : !e.isEdited,
                }
                let editItem = await fetch(`${todoApi}/${e.id}`,{
                    method: "PATCH",
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify(updateData),
                });
                getTodos();
            } catch (error) {
                console.log(error);
            }
        })

/* <- ==================== Functionality of Delete butoon ======================= -> */

        // First click on the delete button then a modal will open & when we click on the yes button which is present inside the modal then the data will be deleted.

        yesBtn.addEventListener("click", async function() {
            try {
                let editItem = await fetch(`${todoApi}/${e.id}`,{
                    method: "DELETE",
                    headers: {"Content-type": "application/json"},
                });
                modalContainer.classList.remove("showModal");
                parentContainer.classList.remove("parent_disabled"); 
                getTodos();
            } catch (error) {
                console.log(error);
            }
        })


/* <- ==================== Functionality of Cancel butoon ======================= -> */

        cancelBtn.addEventListener("click", async function(){
            try {
                let updateData = {
                    isEdited : false,
                }
                let cancelItem = await fetch(`${todoApi}/${e.id}`,{
                    method: "PATCH",
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify(updateData),
                });
                getTodos();
            } 
            catch (error) {
                console.log(error);
            }
        })

/* <- ==================== Functionality of Confirm butoon ======================= -> */

        confirmlBtn.addEventListener("click", async function(){
            try {
                    let updateData = {
                        text : editInput.value,
                        isEdited : false,
                    }
                    let confirmItem = await fetch(`${todoApi}/${e.id}`,{
                        method: "PATCH",
                        headers: {"Content-type": "application/json"},
                        body: JSON.stringify(updateData),
                    });
                    getTodos();
                } 
                catch (error) {
                    console.log(error);
                }
            })

/* <- ==================== Functionality of Checkbox butoon ======================= -> */

            checkBox.addEventListener("change", async function() {
                try {
                    let updateData = {
                        isCompleted : !e.isCompleted,
                    }
                    let checkBoxItem = await fetch(`${todoApi}/${e.id}`,{
                        method: "PATCH",
                        headers: {"Content-type": "application/json"},
                        body: JSON.stringify(updateData),
                    });
                    getTodos();   
                } 
                catch (error) {
                    console.log(error);
                }
            })

/* <- ==================== Functionality of Modal ======================= -> */

            let modalContainer = document.querySelector(".delete_modal_container");

            // Open modal when click on the delete button

                deleteBtn.addEventListener("click", function openModal(){
                    modalContainer.classList.add("showModal");
                    parentContainer.classList.add("parent_disabled");

                });

            // Close modal when click on the No button

                noBtn.addEventListener("click", function () {
                    modalContainer.classList.remove("showModal");
                    parentContainer.classList.remove("parent_disabled");
                });


        if(e.isEdited){
            editBtn.style.display = "none";
            deleteBtn.style.display = "none";
            inputText.style.display = "none";
            editInput.style.display = "block";
            cancelBtn.style.display = "block"
            confirmlBtn.style.display = "block"
        }
        else{
            editBtn.style.display = "block";
            deleteBtn.style.display = "block";
            inputText.style.display = "block";
            editInput.style.display = "none";
            cancelBtn.style.display = "none"
            confirmlBtn.style.display = "none"
        }

        if(e.isCompleted){
            inputText.style.textDecoration = "line-through";
            editBtn.style.textDecoration = "line-through";
            deleteBtn.style.textDecoration = "line-through";
            id.style.textDecoration = "line-through";
            editBtn.disabled = true;
            editBtn.style.cursor = "not-allowed";
        }
        else{
            inputText.style.textDecoration = "none";
            editBtn.style.textDecoration = "none";
            deleteBtn.style.textDecoration = "none";
            id.style.textDecoration = "none";
        }

/* <- ================= Appending data on the webpage ================= -> */

        div.append(checkBox, id, inputText,editInput, editBtn,cancelBtn, deleteBtn,confirmlBtn);
        mainDiv.append(div)

    })
}



async function getTodos() {
    try {
        const res = await fetch(todoApi);
        const data = await res.json();
        appenData(data);
    } catch (error) {
        console.log(error);
    }
}
window.onload = () => {
    getTodos();
};
