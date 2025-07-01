function throttle(func,limit){
    let lastCall = 0;
    return function (...args){
        const now = Date.now();
        if(now - lastCall>= limit){
            lastCall = now;
            func.apply(this,args);
        }
    };
}

// Usage:

window.addEventListener(
    "scroll",
    throttle(function (){
        console.log("Scroll event at: ", new Date());
    },200)
);

// window.addEventListener("scroll", function(){
//     console.log("Scroll event at :", new Date());
// });