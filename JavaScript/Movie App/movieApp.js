const api_key = `3e431991`
let movieUrl = `https://omdbapi.com/?apikey=${api_key}`;

async function movieApp(defaultSearch = "") {
    let search = defaultSearch || document.getElementById("search").value;  // defaultSearch parameter is used for showing Avengers movie while loading the webpage
    let type = document.getElementById("select_type")?.value || "";
    let year = document.getElementById("year_input")?.value || "";
    // console.log(search);
    const main = document.getElementById("container");

    // Show loading message before fetch

    main.innerHTML = `<p style="color:white; font-size:20px; width: 88vw; text-align:center;">Loading...</p>`;

    // Check if search is empty (only for user search, not default load)

    if (!defaultSearch && search === "") {
        alert("Please enter a movie name to search.");
        return; // stop the function here
    }

    let api = movieUrl + `&s=${search}&y=${year}&type=${type}`;

    try {
        let res = await fetch(api);
        let data = await res.json();
        console.log(data.Search);
        foundMovie(data.Search);

        //  Clear the search input after showing results
        if (!defaultSearch) {
            document.getElementById("search").value = "";
            document.getElementById("year_input").value = "";
            // document.getElementById("select_type").value = "All Type"
        }

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
        imdbID.innerText = `IMDB ID: ${el.imdbID}`;
        Type.innerText = `Type: ${el.Type}`;
        Poster.src = `${el.Poster}`;
        Poster.style.cursor = "pointer";
        
        // Adding a More info button on each div
        const btn = document.createElement("button")
        btn.innerText = "More Info..."
        btn.id= "btn_modal"

        btn.addEventListener("click", function () {
            movieDescription(el.imdbID)
        });

        div2.append(Title, Year, imdbID, Type);
        div.append(div2, Poster, btn);
        main.append(div);

    })
}

async function movieDescription(id) {
    let descriptionAPI = `https://omdbapi.com/?apikey=3e431991&i=${id}`

    try {
        let res = await fetch(descriptionAPI);
        let description = await res.json();
        movieDetails(description)
    } catch (error) {
        console.log(error);
    }
}

function movieDetails(val) {
    let showDetails = document.querySelector(".modal_container");
    showDetails.innerHTML = "";  // clear previous results

    showDetails.classList.add("show_modal");


    let detalsDiv = document.createElement("div");

    let Rated = document.createElement("p");
    let Released = document.createElement("p");
    let Runtime = document.createElement("p");
    let Genre = document.createElement("p");
    let Director = document.createElement("h4");
    let Writer = document.createElement("p");
    let Actors = document.createElement("p");
    let Plot = document.createElement("p");
    let Language = document.createElement("p");
    let Country = document.createElement("p");
    let Awards = document.createElement("p");
    let Posters = document.createElement("img");
    let Ratings = document.createElement("p");
    let Metascore = document.createElement("p");
    let imdbRating = document.createElement("p");
    let imdbVotes = document.createElement("p");
    let DVD = document.createElement("p");
    let BoxOffice = document.createElement("p");
    let Website = document.createElement("p");
    let Response = document.createElement("p");



    Rated.innerHTML = `<span class="info">Rated:</span> ${val.Rated}`;
    Released.innerHTML = `<span class="info">Released:</span>${val.Released}`;
    Runtime.innerHTML = `<span class="info">Runtime:</span> ${val.Runtime}`;
    Genre.innerHTML = `<span class="info">Genre:</span> ${val.Genre}`;
    Director.innerHTML = `<span class="info">Director:</span> ${val.Director}`;
    Writer.innerHTML = `<span class="info">Writer:</span> ${val.Writer}`;
    Actors.innerHTML = `<span class="info">Actors:</span> ${val.Actors}`;
    Plot.innerHTML = `<span class="info">Plot:</span> ${val.Plot}`;
    Language.innerHTML = `<span class="info">Language:</span> ${val.Language}`;
    Country.innerHTML = `<span class="info">Country:</span> ${val.Country}`;
    Awards.innerHTML = `<span class="info">Awards:</span> ${val.Awards}`;
    Posters.src = `${val.Poster}`;
    // Posters.style.height = "50px";
    // Posters.style.width = "50px";
    Ratings.innerHTML = `<span class="info">Source:</span> ${val.Ratings[0].Source}<span class="info">Value:</span> ${val.Ratings[0].Value}`;
    // rating.innerText = `Rating Rate: ${el.rating.rate}\nRating Count: ${el.rating.count}`;
    Metascore.innerHTML = `<span class="info">Metascore:</span> ${val.Metascore}`;
    imdbRating.innerHTML = `<span class="info">imdbRating:</span> ${val.imdbRating}`;
    imdbVotes.innerHTML = `<span class="info">imdbVotes:</span> ${val.imdbVotes}`;
    DVD.innerHTML = `<span class="info">DVD: ${val.DVD}`;
    BoxOffice.innerHTML = `<span class="info">BoxOffice:</span> ${val.BoxOffice}`;
    Website.innerHTML = `<span class="info">Website:</span> ${val.Website}`;
    Response.innerHTML = `<span class="info">Response:</span> ${val.Response}`;


    detalsDiv.append(Posters,Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Ratings, Metascore, imdbRating, imdbVotes, DVD, BoxOffice, Website, Response);
    showDetails.append(detalsDiv)


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

