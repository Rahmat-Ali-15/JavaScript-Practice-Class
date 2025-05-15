let btn = document.querySelector("button");
let body = document.querySelector("body");
let currMode = "light";

btn.addEventListener('click', ()=>{
    if(currMode === "light"){
        currMode = "dark"
        body.classList.add("dark");
        body.classList.remove("light");
        btn.classList.add("btn_dark");
        btn.classList.remove("btn_light")
    }
    else{
        currMode = "light"
        body.classList.add("light");
        body.classList.remove("dark");
        btn.classList.add("btn_light");
        btn.classList.remove("btn_dark")
    }
})