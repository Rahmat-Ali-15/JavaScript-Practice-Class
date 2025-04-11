let api2 = "https://fakestoreapi.com/products";

async function apiCall2() {
    try {
        let res1 = await fetch(api2);
        let res1Val = await res1.json();

        // sorting rating
        res1Val.sort((a, b) => a.rating.rate - b.rating.rate)

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
        rating.rate = el.rating.rate;
        rating.count = el.rating.count;

        div2.append(id, title, price, description, category, image, rating);
        main2.append(div2)

    })

}