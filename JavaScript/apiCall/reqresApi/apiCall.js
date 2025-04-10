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






let api2 = "https://fakestoreapi.com/products";

async function apiCall2() {
    try {
        let res1 = await fetch(api2);
        let res1Val = await res1.json();
        console.log(res1Val);
        append2(res1Val)
    } catch (error) {
        console.log(error);
    }
}

function append2(value) {


    value.forEach((el) => {
        let main2 = document.getElementById("second_container");
        let div2 = document.createElement("div");
        let id = document.createElement("p");
        let title = document.createElement("p");
        let price = document.createElement("p");
        let description = document.createElement("p");
        let category = document.createElement("p");
        let image = document.createElement("img");
        let rating = document.createElement("p");


        id.innerText = el.id;
        title.innerText = el.title;
        price.innerText = el.price;
        description.innerText = el.description;
        category.innerText = el.category;
        image.src = el.image;
        rating.rate = el.rate;
        rating.count = el.count;

        div2.append(id, title, price, description, category, image, rating);
        main2.append(div2)

    })

}