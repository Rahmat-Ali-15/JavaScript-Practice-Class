let api_key = `3e431991`
let movie_Url = `https://omdbapi.com/?apikey=${api_key}`;

// <=================>
// Fetch movies data

async function getMovieData() {
    let search_input = document.querySelector("#search_movie")?.value;
    let movie_type = document.querySelector("#select_movie").value;
    let movie_year = document.querySelector("#year")?.value;

    let movieApi = movie_Url + `&s=${search_input}&type=${movie_type}&y=${movie_year}`;

    try {
        let response = await fetch(movieApi);
        let movieData = await response.json();
        console.log(movieData);
    } catch (error) {
        console.log(error);
    }
}
getMovieData()