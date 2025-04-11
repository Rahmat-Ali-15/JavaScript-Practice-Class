const api = "https://reqres.in/api/users";

async function apiCall() {
    try {
        let res = await fetch(api);
        let resVal = await res.json();
        // console.log(resVal);
        append(resVal.data)
    } catch (error) {
        console.log(error);
    }
}

function append(value){
    let main = document.getElementById("container");

    value.forEach((el)=>{
        let div = document.createElement("div");
        let img = document.createElement("img");
        let fName= document.createElement("p");
        let lName = document.createElement("p");
        let email = document.createElement("p");
        let id = document.createElement("p");

        id.innerText = el.id;

        img.src = el.avatar;

        fName.innerText = el.first_name;

        lName.innerText = el.last_name;

        email.innerText = el.email;

        div.append(img,id, fName, lName, email);
        main.append(div);

    })

}





