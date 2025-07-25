function debounce(func, delay){
    let timer;
    return function (...args){
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args),delay);
    };
}

const input = document.getElementById("search");

input.addEventListener(
    "input",
    debounce(function (e){
        console.log("Searching for:", e.target.value);
    },500)
)