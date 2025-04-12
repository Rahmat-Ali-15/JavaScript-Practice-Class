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

        id.innerText = `Id:- ${el.id}`;
        title.innerText = `Title:- ${el.title}`;
        title.className = "title"
        price.innerText = `Price:- ${el.price}`;
        description.innerText = `Discription:- ${el.description}`;
        description.className = "description"
        category.innerText = `Category:- ${el.category}`;
        image.src = el.image;
        rating.innerText = `Rating Rate: ${el.rating.rate}\nRating Count: ${el.rating.count}`;


        div2.append(image, id, title, price, description, category, rating);
        main2.append(div2)

    })

}
