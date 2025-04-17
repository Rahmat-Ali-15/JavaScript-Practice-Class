const api_key = `3e431991`
let movieUrl = `https://omdbapi.com/?apikey=${api_key}`;

async function movieApp(defaultSearch = "") {
    let search = defaultSearch || document.getElementById("search").value;  // defaultSearch parameter is used for showing Avengers movie while loading the webpage
    let type = document.getElementById("select_type")?.value || "";
    let year = document.getElementById("year_input")?.value || "";
    // console.log(search);

    let api = movieUrl + `&s=${search}&y=${year}&type=${type}`;
    
    try {
        let res = await fetch(api);
        let data = await res.json();
        console.log(data.Search);
        foundMovie(data.Search);
    } catch (error) {
        console.log(error);
    }
}

function foundMovie(value) {
    let main = document.getElementById("container");
    main.innerHTML = "";  // clear previous results

    value.forEach((el) => {
        let div = document.createElement("div");
        div.className = "parent_container"
        let div2 = document.createElement("div");
        div2.className = "p_h5_container"
        let Title = document.createElement("h5");
        let Year = document.createElement("p");
        let imdbID = document.createElement("p");
        let Type = document.createElement("p");
        let Poster = document.createElement("img");

        Title.innerText = `Title: ${el.Title}`;
        Year.innerText = `Year: ${el.Year}`
        imdbID.innerText = `imdbID: ${el.imdbID}`;
        Type.innerText = `Type: ${el.Type}`;
        Poster.src = `${el.Poster}`;

        div2.append(Title, Year, imdbID, Type);
        div.append(div2, Poster);
        main.append(div);

    })
}

// Avengers word will show in the movie name input
/*window.onload = function () {
    document.getElementById("search").value = "Avengers";
    movieApp();
};*/ 


// Avengers word will not show in the movie name input

window.onload = function () {
    movieApp("Avengers"); // But don't show it in the input
};
