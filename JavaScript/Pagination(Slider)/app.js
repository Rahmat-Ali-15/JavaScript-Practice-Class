let slides = document.querySelectorAll(".slide-img");
let counter = 0;

slides.forEach((slide,index) => {
    slide.style.left = `${index * 100}%`
})

const slideImg = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}

const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");

prevbtn.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        slideImg();
    }
});

nextbtn.addEventListener("click", () => {
    if (counter < slides.length - 1) {
        counter++;
        slideImg();
    }
})