let movieUrl = `https://omdbapi.com/?apikey=3e431991`

async function movieApp() {
    let search = document.getElementById("search").value;
    console.log(search);

    let api = movieUrl + `&s=${search}`

    try {
        let res = await fetch(api);
        let data = await res.json();
        console.log(data.Search
        );
        foundMovie(data.Search);
    } catch (error) {
        console.log(error);
    }
}

function foundMovie(value) {
    let main = document.getElementById("container");

    value.forEach((el) => {
        let div = document.createElement("div");
        let Title = document.createElement("p");
        let Year = document.createElement("p");
        let imdbID = document.createElement("p");
        let Type = document.createElement("p");
        let Poster = document.createElement("img");

        Title.innerText = `Tirle: ${el.Title}`;
        Year.innerText = `Title: ${el.Year}`
        imdbID.innerText = `imdbID: ${el.imdbID}`;
        Type.innerText = `Type: ${el.Type}`;
        Poster.src = `${el.Poster}`;

        div.append(Title, Year, imdbID, Type, Poster);
        main.append(div)

    })
}