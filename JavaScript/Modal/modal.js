function openModal(){
    document.querySelector(".modal_container").classList.add("show_modal");
}

function closeModal(){
    document.querySelector(".modal_container").classList.remove("show_modal");
}
let btn_click = document.querySelector("#button")
btn_click.addEventListener("click",openModal);

let cross_click = document.querySelector("span");
cross_click.addEventListener("click",closeModal);