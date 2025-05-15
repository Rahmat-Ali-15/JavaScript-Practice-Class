const url = `https://jsonplaceholder.typicode.com/posts`

const btn = document.querySelector(".btn");

async function getData(){
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log("data", data);
        append(data)
    } catch (error) {
        console.log(error);
    }
}
// getData()
btn.addEventListener("click",()=>{
    getData()
});


function append(value){
    let main = document.querySelector(".container");
    main.innerHTML= "";

    value.forEach((el) => {
    let container = document.createElement("div");
    let userId = document.createElement("p");
    let Id = document.createElement("p");
    let Title = document.createElement("p");
    let Body = document.createElement("p");

    userId.innerText = `UserId : ${el.userId}`;
    Id.innerText = `Id : ${el.id}`;
    Title.innerText = `Title : ${el.title}`;
    userId.innerText = `UserId : ${el.body}`;
    container.append(userId,Id, Title, Body);
    main.append(container)

    });

}
