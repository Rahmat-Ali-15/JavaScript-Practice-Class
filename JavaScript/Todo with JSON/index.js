const todoApi = `https://api-server-zecj.onrender.com/todo`;

const myTodo = async() => {
    let inputBox = document.querySelector(".input_box").value;

    let todo = {
        id : Date.now(),
        text : inputBox,
        isEdited : false,
        isCompleted : false,
    }

    try {
        const res = await fetch(todoApi,{
            method : "POST",
            body : JSON.stringify(todo),
            headers : {
                "Content-type" : "application/json",
            }
        });

        let val = await res.json();
        console.log(val);
        appenData(val);
    } catch (error) {
        console.log(error);
    }
}


function appenData(val) {
    let mainDiv = document.querySelector(".todoDetails");

    val.forEach((e) => {
        let div = document.createElement("div");

        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";

        let id = document.createElement("p");
        let inputText = document.createElement("p");

        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";


        div.append(checkBox,id,inputText,editBtn,deleteBtn);
        mainDiv.append(div)


    })
}