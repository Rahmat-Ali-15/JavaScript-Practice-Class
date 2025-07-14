const todoApi = `https://api-server-zecj.onrender.com/todo`;

const myTodo = async () => {
    let arr = [];
    let inputBox = document.querySelector(".input_box").value;

    console.log(inputBox, 'inputBox');

    let todo = {
        id: Date.now(),
        text: inputBox,
        isEdited: false,
        isCompleted: false,
    }
    arr.push(todo)

    try {
        const res = await fetch(todoApi, {
            method: "POST",
            body: JSON.stringify(arr),
            headers: {
                "Content-type": "application/json",
            }
        });

        let val = await res.json();
        console.log(val,"this is val");
        appenData(val);
    } catch (error) {
        console.log(error);
    }
}


function appenData(val) {
    let mainDiv = document.querySelector(".todoDetails");
    mainDiv.innerHTML = "";

    val.forEach((e) => {
        let div = document.createElement("div");
        div.classList.add("todoDetails_container")

        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";

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
        
        
        let confirmlBtn = document.createElement("button");
        confirmlBtn.classList.add("confirmBtn");


        // Functionality of Edit button

        editBtn.addEventListener("click", async function(el){
            try {
                if (e.id === el.id){
                    let editItem = await fetch(todoApi);
                    let data = await editItem.json();
                    console.log(data, "this is data");
                }
                appenData();
            } catch (error) {
                console.log(error);
            }
        })


        div.append(checkBox, id, inputText, editBtn, deleteBtn);
        mainDiv.append(div)


    })
}